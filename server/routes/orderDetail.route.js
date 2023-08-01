const express = require("express") ;
const route = express.Router();
const orderDetailController = require('../controllers/orderDetailController')

route
.param('id',orderDetailController.checkId)

route
.route("/")
.get(orderDetailController.getAllOrderDetail)
.post(orderDetailController.createNewOrderDetail)

route
.route("/:id")
.get(orderDetailController.getOrderDetail)
.patch(orderDetailController.updateOrderDetail)
.delete(orderDetailController.deleteOrderDetail)



module.exports = route