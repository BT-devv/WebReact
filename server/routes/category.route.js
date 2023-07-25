const express = require("express") ;
const route = express.Router();
const categoryController = require("../controllers/categoryController");


route
.param('id',categoryController.checkId)

route
.route("/")
.get(categoryController.getAllCategory)
.post(categoryController.createNewCategory)

route
.route("/:id")
.get(categoryController.getCategory)
.patch(categoryController.updateCategory)
.delete(categoryController.deleteCategory)

module.exports = route