import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import{Link} from 'react-router-dom';
const Navbar = () =>{
  return(
      <div className="navbar">
        <div className="wrapper">
          <div className="left">
            <div className="icons">
              <GTranslateOutlinedIcon/>
              <KeyboardArrowDownIcon />
            </div>
            <div className="item">
              <Link className='link' to='/male'> Male</Link></div>
            <div className="item">
              <Link className='link' to='/female'> Female</Link></div>
            <div className="item">
              <Link className='link' to='/colection'> Colection</Link>
            </div>
          </div>
          <div className="center">
            <div className="item">
              <Link className='link' to='/'>Clothes TV ______PJAC2</Link>
            </div>
          </div>
          <div className="right">
            <div className="item">
              <Link className='link' to='/'> Home Page</Link></div>
            <div className="item">
              <Link className='link' to='/about'> About</Link></div>
            <div className="item">
              <Link className='link' to='/contact'> Contact</Link></div>
            <div className="item">
              <Link className='link' to='/store'> Stort</Link>
            </div>
            <div className="icons">
              <SearchIcon />
              <PersonOutlineIcon />
              <FavoriteBorderIcon />
              <div className="cartIcon">
                <ShoppingCartOutlinedIcon />
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
};

export default Navbar;