const express = require('express')
const router = express.Router()
const db = require('../models/index')
// const {User} = require('../models/user');
router.get('/',async(req,res)=>{
    try {
      const data = await db.User.findAll();
      res
      .status(200)
      .json(data)
    } catch (error) {
      console.log(error);
    }
  })


router.post("/", async (req, res) => {
    const post = req.body;
    await db.User.create(post);
    res.json(post);
  });


module.exports = router