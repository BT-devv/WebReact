import React from 'react';
import{Link} from 'react-router-dom';
const Login = () =>{
    return(
        <div className='auth'>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <button>
                    Login
                </button>
                <p>This is erro!!!</p>
                <span>
                    If you don't have Account <Link to='/Register'>Regrister</Link>
                </span>
            </form>
        </div>
    )
};

export default Login;