const express = require('express')
const app = express()
const port = 3001
const connectDB = require('./config/connectDatabase')
const customMiddleware = require('./config/customMiddleware')
const cors =require('cors')


app.use(express.json());
app.use(cors())
const db = require('./models')

//custom Middleware
customMiddleware();

//connect database
connectDB();

//routers
const userRouter = require('./routes/User')

app.use("/user",userRouter)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


