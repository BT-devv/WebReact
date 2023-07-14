const express = require("express") ;
const route = express.Router();
const userController = require("../controllers/userController") 
const authController = require("../controllers/authController") 


route.post('/signup',authController.signup)
route.post('/login',authController.login)

route
.param('id',userController.checkId)

route
.route("/")
.get(userController.getAllUser)
.post(userController.createUser)

route
.route("/:id")
.get(userController.getUser)
.patch(userController.updateUser)
.delete(userController.deleteUser)



module.exports = route
