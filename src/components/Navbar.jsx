import React from "react";
import IMAGES from "../images/image";
import { BsPersonPlusFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand me-5" href="#">
            <img className="logo" src={IMAGES.logo} alt="Logo" />
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-3">
              <li className="nav-item active">
                <a className="nav-link me-5" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" href="#">
                  Store
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" href="#">
                 <BsFillPersonFill /> Login 
                </a>
              </li>
              <li className="nav-item me-5">
                <a className="nav-link" href="#">
                   <BsPersonPlusFill /> Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
