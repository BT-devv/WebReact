import '../styles/Style.scss';
import {createBrowserRouter, Outlet, RouterProvider,} from "react-router-dom";

import Home from '../components/Home';
import Colection from '../components/Colection';
import Male from '../components/Male';
import Female from '../components/Female';
import About from '../components/About';
import Contact from '../components/Contact';
import Store from '../components/Store';
import Login from '../components/Login';
import Register from '../components/Register';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout =() =>{
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
// const LayoutProduct =() =>{
//   return(
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </>
//   )
// }

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
        path:"/Colection",
        element: <Colection />
      },
      {
        path:"/Male",
        element: <Male />
      },
      {
        path:"/Female",
        element: <Female />
      },
      {
        path:"/About",
        element: <About />
      },
      {
        path:"/Contact",
        element: <Contact />
      },
      {
        path:"/Store",
        element: <Store />
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
