import React, { useState } from 'react';
import{Link} from 'react-router-dom';
import axios from "axios";

const Register = () =>{
    //DỮ LIỆU ĐẦU VÀO
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
    })

    // // XỬ LÝ SỰ THAY ĐỔI
    const handleChange = e =>{
        setInputs(prev =>({...prev, [e.target.name]: e.target.value}))

    }
    console.log(inputs)

    //DỮ LIỆU CUỐI
    const handleSbmit = async e =>{
        //KẾT THÚC, NGĂN CHẶN MẶC ĐỊNH
        e.prevenDefault()
        try {
            const res  = await axios.post("/authController/register", inputs)
            console.log(res);
        } catch (error) {
            console.log(error)
        }

    }
    return(
        <div className='auth'>
            <h1>Register</h1>
            <form>
                <input required type="text" placeholder='Username' name='username' onChange={handleChange}/>
                <input required type="email" placeholder='Email' name='email' onChange={handleChange}/>
                <input required type="password" placeholder='Password' name='password' onChange={handleChange}/>
                <input required type="password" placeholder='Re-Password' name='re-password' onChange={handleChange}/>
                <button onClick={handleSbmit}>
                    Register
                </button >
                <p>This is erro!!!</p>
                <span>
                    If you have Account <Link to='/Login'>Login</Link>
                </span>
            </form>
        </div>
    )
};

export default Register;