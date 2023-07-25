const express = require("express") ;
const route = express.Router();
const productController = require('../controllers/productController')

route
.param('id',productController.checkId)

route
.route("/")
.get(productController.getAllProduct)
.post(productController.createNewProduct)

route
.route("/:id")
.get(productController.getProduct)



module.exports = route
