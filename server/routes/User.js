const express = require('express')
const router = express.Router()
const {ser}= require('../models')


router.get('/',(req,res)=>{
    res.json("hello tuan bui")
})


router.post("/", async (req, res) => {
    const post = req.body;
    await User.create(post);
    res.json(post);
  });


module.exports = router