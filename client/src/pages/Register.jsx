import React from 'react';
import{Link} from 'react-router-dom';

const Register = () =>{
    return(
        <div className='auth'>
            <h1>Register</h1>
            <form>
                <input required type="text" placeholder='Username'/>
                <input required type="email" placeholder='Email'/>
                <input required type="password" placeholder='Password'/>
                <input required type="password" placeholder='Re-Password'/>
                <button>
                    Register
                </button>
                <p>This is erro!!!</p>
                <span>
                    If you have Account <Link to='/Login'>Login</Link>
                </span>
            </form>
        </div>
    )
};

export default Register;