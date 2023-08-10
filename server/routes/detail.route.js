const express = require("express") ;
const route = express.Router();
const StaticData = require("../utils/StaticData")
const authController = require("../controllers/authController") 
const detailController = require('../controllers/detailController')

route
.param('id',detailController.checkId)

route
.route("/")
.get(detailController.getAllDetail)
.post(
    authController.protect,
    authController.restrictTo(StaticData.AUTH.Role.admin),
    detailController.createNewDetail)

route
.route("/:id")
.get(detailController.getDetail)
.patch(
    authController.protect,
    authController.restrictTo(StaticData.AUTH.Role.admin),
    detailController.updateDetail)
.delete(
    authController.protect,
    authController.restrictTo(StaticData.AUTH.Role.admin),
    detailController.deleteDetail)



module.exports = route