const { or } = require("sequelize");
const OrderDAO = require("../DAOs/orderDaos");

exports.checkId = async (req, res, next, val) => {
    try{
        const id = val;
        let order = await OrderDAO.getOrder(id);
        if (!order){
            return res.status(404)     /// 404 - NOT FOUND!
                .json({
                    code: 404,
                    msg: `Not found order with id ${id}`,
                });
        }
        req.order = order;
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
  
  exports.getAllOrder = async (req, res) =>{
    try{
        const order = await OrderDAO.getAllOrder();
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: {
                order
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
  
  exports.getOrder = async(req,res)=>{
    try {
      const order = req.order
          res.status(200)
              .json({
                  code: 200,
                  msg: 'OK',
                  data: {order}
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
  
  
  exports.createNewOrder = async(req,res)=>{
    try {
      const order = req.body
      await OrderDAO.createOrder(order)
      res
      .status(200)
      .json({
        code:200,
        msg:"OK",
        data:{order}
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
  
  exports.updateOrder = async(req,res)=>{
    try {
      const id = req.params.id 
      const data = req.body;
      await OrderDAO.updateOrderData(id,data)
      const order = OrderDAO.getOrder(id)
          res.status(200)
              .json({
                  code: 200,
                  msg: 'OK',
                  data: {order}
              });
    } catch (e) {
      console.error(e);
      return res
            .status(500)        // 500 - Internal Error
            .json({
                code: 500,
                msg: e.toString()
            });
    }
  }
  
  exports.deleteOrder = async(req,res)=>{
    try {
      const id = req.params.id 
      const order = await OrderDAO.deleteOrder(id)
          res.status(200)
              .json({
                  code: 200,
                  msg: 'OK',
                  data:{order}
              });
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
  