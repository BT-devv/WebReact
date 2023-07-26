const DetailDAO = require("../DAOs/detailDaos");

exports.checkId = async (req, res, next, val) => {
    try{
        const id = val;
        let detail = await DetailDAO.getDetail(id);
        if (!detail){
            return res.status(404)     /// 404 - NOT FOUND!
                .json({
                    code: 404,
                    msg: `Not found product detail with id ${id}`,
                });
        }
        req.detail = detail;
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
  
  exports.getAllDetail = async (req, res) =>{
    try{
        const detail = await DetailDAO.getAllDetail();
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: {
                detail
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
  
  exports.getDetail = async(req,res)=>{
    try {
      const detail = req.detail
          res.status(200)
              .json({
                  code: 200,
                  msg: 'OK',
                  data: {detail}
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
  
  
  exports.createNewDetail = async(req,res)=>{
    try {
      const detail = req.body
      await DetailDAO.createDetail(detail)
      res
      .status(200)
      .json({
        code:200,
        msg:"OK",
        data:{detail}
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
  
  exports.updateDetail = async(req,res)=>{
    try {
      const id = req.params.id 
      const data = req.body;
      await DetailDAO.updateDetailData(id,data)
      const detail = DetailDAO.getDetail(id)
          res.status(200)
              .json({
                  code: 200,
                  msg: 'OK',
                  data: {detail}
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
  
  exports.deleteDetail = async(req,res)=>{
    try {
      const id = req.params.id 
      const detail = await DetailDAO.deleteDetail(id)
          res.status(200)
              .json({
                  code: 200,
                  msg: 'OK',
                  data:{detail}
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
  