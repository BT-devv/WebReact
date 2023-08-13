import axios from "axios";
import { loginFailed, loginStart, loginSuccess, regisFailed, regisStart, regisSuccess } from "./authSlice";


export const loginUser = async(user, dispatch,navigate) =>{
    dispatch(loginStart());
    try { 
        const response = await axios.post("http://localhost:3001/api-user/login",user);
        dispatch(loginSuccess(response.data));
        localStorage.setItem("token",response.data.token)
        navigate("/"); // Chuyển hướng đến trang chủ (homepage)
      } catch (error) {
        dispatch(loginFailed())
      }
}

export const regisUser = async(user, dispatch,navigate) =>{
    dispatch(regisStart());
    try {
         await axios.post("http://localhost:3001/api-user/signup",user);
        dispatch(regisSuccess());
        navigate("/Login"); // Chuyển hướng đến trang chủ (homepage)
      } catch (error) {
        dispatch(regisFailed())
      }
}