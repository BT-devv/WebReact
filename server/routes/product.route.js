const express = require("express") ;
const route = express.Router();
const productController = require('../controllers/productController')

// route
// .param('id')

route
.route("/category")
.post(productController.createNewCategory)

route
.route("/product")
.post(productController.createNewProduct)
// route
// .route("/:id")



module.exports = route
