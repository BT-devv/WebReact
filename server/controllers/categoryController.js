const CategoryDAO = require("../DAOs/categoryDaos");

exports.checkId = async (req, res, next, val) => {
    try{
        const id = val;
        let category = await CategoryDAO.getCategory(id);
        if (!category){
            return res.status(404)     /// 404 - NOT FOUND!
                .json({
                    code: 404,
                    msg: `Not found category with id ${id}`,
                });
        }
        req.category = category;
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
  

exports.getAllCategory = async (req, res) =>{
    try{
        const categorys = await CategoryDAO.getAllCategory(req.query);
        res.status(200).json({
            code: 200,
            msg: 'OK',
            data: {
                categorys
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

exports.getCategory = async(req,res)=>{
    try {
      const category = req.category
          res.status(200)
              .json({
                  code: 200,
                  msg: 'OK',
                  data: {category}
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

exports.createNewCategory = async(req,res)=>{
    try {
      const category = req.body
      await CategoryDAO.createCategory(category)
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

  exports.updateCategory = async(req,res)=>{
    try {
      const id = req.params.id 
      const data = req.body;
      await CategoryDAO.updateCategoryData(id,data)
      const category = CategoryDAO.getCategory(id)
          res.status(200)
              .json({
                  code: 200,
                  msg: 'OK',
                  data: {category}
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

  exports.deleteCategory = async(req,res)=>{
    try {
      const id = req.params.id 
      const category = await CategoryDAO.deleteCategory(id)
          res.status(200)
              .json({
                  code: 200,
                  msg: 'OK',
                  data:{category}
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
  