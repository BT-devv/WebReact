import '../styles/Style.scss';
import {createBrowserRouter, Outlet, RouterProvider,} from "react-router-dom";

import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import Product from '../pages/Product/Product';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Layout =() =>{
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
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
        path:"/Products",
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
    element: <div>
      <Login />
      </div>,
  },
  {
    path: "/register",
    element: <div>
      <Register />
    </div>,
  },
]);

function App() {
  return (
    <div className="App">
      <div className='Container'>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
