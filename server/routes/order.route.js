const express = require("express") ;
const route = express.Router();
const orderController = require('../controllers/orderController')

route
.param('id',orderController.checkId)

route
.route("/")
.get(orderController.getAllOrder)
.post(orderController.createNewOrder)

route
.route("/:id")
.get(orderController.getOrder)
.patch(orderController.updateOrder)
.delete(orderController.deleteOrder)



module.exports = route