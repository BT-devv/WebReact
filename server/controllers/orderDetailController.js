const { or } = require("sequelize");
const OrderDetailDAO = require("../DAOs/orderDetailDaos");

exports.checkId = async (req, res, next, val) => {
    try{
        const id = val;
        let orderDetail = await OrderDetailDAO.getOrderDetail(id);
        if (!orderDetail){
            return res.status(404)     /// 404 - NOT FOUND!
                .json({
                    code: 404,
                    msg: `Not found order detail with id ${id}`,
                });
        }
        req.orderDetail = orderDetail;
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
  
  exports.getAllOrderDetail = async (req, res) =>{
    try{
        const orderDetail = await OrderDetailDAO.getAllOrderDetail();
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: {
                orderDetail
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
  
  exports.getOrderDetail = async(req,res)=>{
    try {
      const orderDetail = req.orderDetail
          res.status(200)
              .json({
                  code: 200,
                  msg: 'OK',
                  data: {orderDetail}
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
  
  
  exports.createNewOrderDetail = async(req,res)=>{
    try {
      const orderDetail = req.body
      await OrderDetailDAO.createOrderDetail(orderDetail)
      res
      .status(200)
      .json({
        code:200,
        msg:"OK",
        data:{orderDetail}
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
  
  exports.updateOrderDetail = async(req,res)=>{
    try {
      const id = req.params.id 
      const data = req.body;
      await OrderDetailDAO.updateOrderDetailData(id,data)
      const orderDetail = OrderDetailDAO.getOrderDetail(id)
          res.status(200)
              .json({
                  code: 200,
                  msg: 'OK',
                  data: {orderDetail}
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
  
  exports.deleteOrderDetail = async(req,res)=>{
    try {
      const id = req.params.id 
      const orderDetail = await OrderDetailDAO.deleteOrderDetail(id)
          res.status(200)
              .json({
                  code: 200,
                  msg: 'OK',
                  data:{orderDetail}
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
  