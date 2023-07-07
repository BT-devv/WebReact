import React, { useState } from 'react';
import{Link} from 'react-router-dom';
import axios from "axios";

const Register = () =>{
    //DỮ LIỆU ĐẦU VÀO
    const [inputs, setInputs] = useState({
        Username: "",
        Email: "",
        Password: "",
    })

    // // XỬ LÝ SỰ THAY ĐỔI
    const handleChange = e =>{
        setInputs(prev =>({...prev, [e.target.name]: e.target.value}))

    }

    //DỮ LIỆU CUỐI
    const handleSbmit = async e =>{
        //KẾT THÚC, NGĂN CHẶN MẶC ĐỊNH
        e.prevenDefault()
        try {
            const res  = await axios.post("http://localhost:3000/Register", inputs)
            console.log(res);
        } catch (error) {
            console.log(error)
        }

    }
    return(
        <div className='auth'>
            <h1>Register</h1>
            <form>
                <input required type="text" placeholder='Username' name='Username' onChange={handleChange}/>
                <input required type="email" placeholder='Email' name='Email' onChange={handleChange}/>
                <input required type="password" placeholder='Password' name='Password' onChange={handleChange}/>
                {/* <input required type="password" placeholder='Re-Password' name='re-password' /> */}
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