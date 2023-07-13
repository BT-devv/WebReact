const express = require("express") ;
const userController = require("../controllers/userController") 
let router = express.Router();

let initWebRoutes = (app) => {

    router.get("/get-user",userController.getAllUser)
    router.post("/creat-user",userController.createUser)



    return app.use("/", router);
}

module.exports = initWebRoutes;