const express = require('express')
const router = express.Router()
const db = require('../models/index')
const productDao = require('../DAOs/productDaos')

exports.createNewCategory = async(req,res)=>{
  try {
    const category = req.body
    await productDao.createCategory(category)
    res
    .status(200)
    .json({
      code: 200,
      msg: 'OK',
      data: {category}
    })
  } catch (error) {
    console.error(e);
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
