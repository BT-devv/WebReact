import React, { useState } from "react";
import "./Navbar.scss";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import GTranslateOutlinedIcon from "@mui/icons-material/GTranslateOutlined";

import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="icons">
            <GTranslateOutlinedIcon />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products">
              {" "}
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products">
              {" "}
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products">
              {" "}
              Colection
            </Link>
          </div>
        </div>
        <div className="center">
          <div className="item">
            <Link className="link" to="/">
              Clothes TV ______PJAC2
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              {" "}
              Home Page
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/about">
              {" "}
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/contact">
              {" "}
              Contact
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineIcon onClick={() => setOpenDropdown(!openDropdown)} />
            {openDropdown && (
              <div className="dropdown-menu">
                <Link className="dropdown-link link" to="/register">
                  Đăng ký
                </Link>
                <Link className="dropdown-link link" to="/login">
                  Đăng nhập
                </Link>
              </div>
            )}
            <FavoriteBorderIcon />
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
