const express = require('express')
const router = express.Router()
const db = require('../models/index')
const productDao = require('../DAOs/productDaos')

exports.checkId = async (req, res, next, val) => {
  try{
      const id = val;
      let product = await productDao.getProduct(id);
      if (!product){
          return res.status(404)     /// 404 - NOT FOUND!
              .json({
                  code: 404,
                  msg: `Not found product with id ${id}`,
              });
      }
      req.product = product;
  }catch (e) {
      console.error(e);
      return res
          .status(500)        // 500 - Internal Error
          .json({
              code: 500,
              msg: e.toString()
          });
  }
  next();
}

exports.getAllProduct = async (req, res) =>{
  try{
      const product = await productDao.getAllProduct();
      res.status(200).json({
          code: 200,
          msg: 'OK',
          data: {
              product
          },
      });
  }catch (e) {
      console.error(e);
      res
          .status(500)     
          .json({
              code: 500,
              msg: e.toString()
          });
  }
  
};

exports.getProduct = async(req,res)=>{
  try {
    const product = req.product
        res.status(200)
            .json({
                code: 200,
                msg: 'OK',
                data: {product}
            });
  } catch (error) {
    console.error(error);
      return res
          .status(500)        // 500 - Internal Error
          .json({
              code: 500,
              msg: e.toString()
          });
  }
}


exports.createNewProduct = async(req,res)=>{
  try {
    const product = req.body
    await productDao.createProduct(product)
    res
    .status(200)
    .json({
      code:200,
      msg:"OK",
      data:{product}
    })
  } catch (error) {
    console.error(error);
    return res
    .status(500)        // 500 - Internal Error
    .json({
        code: 500,
        msg: error.toString()
    });
  }
}
