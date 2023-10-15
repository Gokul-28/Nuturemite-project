import React from "react";
import { Link, Outlet } from "react-router-dom";
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
            <ul className="navbar-nav ms-auto me-1">
              <li className="nav-item active me-5">
              <Link to="/" className="nav-item  homenav text-muted text-decoration-none">
              <p className="text-light">Home</p>
                </Link>
              </li>
              <li className="nav-item me-5">
              <Link to="about" className="nav-item me-1 text-muted text-decoration-none">
              <p className="text-light">About</p>
                </Link>
              </li>
              <li className="nav-item me-5">
              <Link to="store" className="nav-item me-1 text-muted text-decoration-none">
              <p className="text-light">Store</p>
                </Link>
              </li>
              <li className="nav-item me-5">
              <Link to="blog" className="nav-item me-1 text-muted text-decoration-none">
              <p className="text-light">Blog </p>
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link to="login" className="nav-item me-1 text-muted text-decoration-none">
                  <p className="text-light"><BsFillPersonFill /> Login </p>
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link to="register" className="nav-item me-1 text-muted text-decoration-none">
                   <p className="text-light"> <BsPersonPlusFill /> Register </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
