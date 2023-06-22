import express from "express";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"

const app = express();
const port = 3001;

app.use(express.json());
app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)

app.listen(8800,()=>{
    console.log(`Server Runnig: http://localhost:${port}`);
})