const express = require("express") ;
const route = express.Router();
const detailController = require('../controllers/detailController')

route
.param('id',detailController.checkId)

route
.route("/")
.get(detailController.getAllDetail)
.post(detailController.createNewDetail)

route
.route("/:id")
.get(detailController.getDetail)
.patch(detailController.updateDetail)
.delete(detailController.deleteDetail)



module.exports = route