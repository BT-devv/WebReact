import './Style.scss';
import {createBrowserRouter, Outlet, RouterProvider,} from "react-router-dom";

import Home from './pages/Home';
import Colection from './pages/Products/Colection';
import Male from './pages/Products/Male';
import Female from './pages/Products/Female';
import About from './pages/About';
import Contact from './pages/Contact';
import Store from './pages/Store';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout =() =>{
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
const LayoutProduct =() =>{
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
