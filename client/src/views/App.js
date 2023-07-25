import '../styles/Style.scss';
import '../styles/Dark.scss'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import Product from '../pages/Product/Product';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HomeAdmin from '../pages/Admin/Home/HomeAdmin';
import LoginAdmin from '../pages/Admin/Login/LoginAdmin';
import ListAdmin from '../pages/Admin/List/ListAdmin';
import Single from '../pages/Admin/Single/Single';
import New from '../pages/Admin/New/New';
import { productInputs, userInputs } from '../fromSource';
import { useContext } from 'react';
import { DarkModeContext } from '../context/darkModeContext';



const Layout =() =>{
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
const LayoutAdmin =()=>{
  return(
    <>
      <Outlet />
  
    </>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/Products/1",
        element: <Products />
      },
      {
        path:"/Product/:id",
        element: <Product />
      },
      {
        path:"/About",
        element: <About />
      },
      {
        path:"/Contact",
        element: <Contact />
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  // admin
  {
    path: "/loginadmin",
    element: <div>
      <LoginAdmin />
    </div>,
  },
  {
    path: "/",
    element: <LayoutAdmin />,
    children:[
      {
        path: "/homeadmin",
        element: <HomeAdmin/>,
      },
      {
        path: "/users",
        element: <ListAdmin/>,
      },
      {
        path: "/users/:id",
        element: <Single/>,
      },
      {
        path: "/users/news",
        element: <New  inputs ={userInputs} title = "Add new user"/>,
      },
      {
        path: "/productAdmin",
        element: <ListAdmin/>,
      },
      {
        path: "/productAdmin/:id",
        element: <Single/>,
      },
      {
        path: "/productAdmin/news",
        element: <New inputs ={productInputs} title = "Add new product"/>,
      },
    ]
  },
  
]);

function App() {
  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={ darkMode ? "app App dark": "app App"}>
      <div className='Container'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
