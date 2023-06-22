import { database } from "../database.js";
import bcrypt from "bcryptjs"
export const register = (req, res) =>{

    //check existing user
    const q = "SELECT * FROM user WHERE email = ? OR username = ?"
    database.query(q,[req.body.email, req.body.username], (err, data)=>{
        if(err)
            return res.json(err)
        // 409: DỮ LIỆU ĐÃ TỒN TẠI
        if (data.length)
            return res
            .status(409)
            .json({
                code: 409,
                msg: `User already exists!`
            })

    //hash password and create user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    //SELECT USERS INTO DATABASE
    const q = "INSERT INTO user(`username`,`email`,`password`) VALUES (?)"
    const values = [
        req.body.username,
        req.body.email,
        hash,
    ]
    database.query(q, [values], (err, data)=>{
        //ERR
        if(err)return res.json(err);
        //200: THÀNH CÔNG
        return res.
            status(200)
            .json({
                code: 200,
                msg: `Create new user successfully!`
            });

    })
    });

}
export const login = (req, res) =>{
    
}
export const logout = (req, res) =>{
    
}