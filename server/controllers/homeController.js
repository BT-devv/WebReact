const db = require('../models/index')

router.get('/',async(req,res)=>{
    try {
      const data = db.User.finAll();
      res.json(data)
    } catch (error) {
      console.log(error);
    }
  })