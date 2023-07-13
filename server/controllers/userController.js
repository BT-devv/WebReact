const express = require('express')
const router = express.Router()
const db = require('../models/index')
const userController = require('../DAOs/userDaos')


exports.getAllUser = async(req,res)=>{
    try {
      const data = await userController.getAllUser();
      res
      .status(200)
      .json(data)
    } catch (error) {
      console.log(error);
    }
}


exports.createUser = async (req, res) => {
    try {
        const post = req.body;
        await userController.createNewUser(post);
        res
        .json(post)
        .status('200')
    } catch (error) {
        console.log(error);
    }
    
}
