import { database } from "../database.js";
// import bcrypt from "bcryptjs"
export const register = (req, res) =>{

    //check existing user
    // const q = "SELECT * FROM user WHERE email = ? OR username = ?"
    // database.query(q,[req.body.email, req.body.username], (err, data)=>{
    //     if(err)
    //         return res.json(err)
    //     if (data.length)
    //         return res.status(409).json("User already exists")
    // });

    //hash password and create user
    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync(req.body.password, salt);
}
export const login = (req, res) =>{
    
}
export const logout = (req, res) =>{
    
}