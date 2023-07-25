const express = require('express')
const app = express()
const port = 3001
const connectDB = require('./config/connectDatabase')
const customMiddleware = require('./config/customMiddleware')
const cors =require('cors')
const userRouter = require('./routes/user.route')
const productRouter = require('./routes/product.route')
const categoryRouter = require("./routes/category.route")

const dotenv = require('dotenv')
dotenv.config({
    path: './.env'
})

app.use(express.json());
app.use(cors())
const db = require('./models')

//custom Middleware
customMiddleware();

//connect database
connectDB();

//routers
app.use('/api-user',userRouter)
app.use('/api-product',productRouter)
app.use('/api-category', categoryRouter)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


