import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <img src={logo} alt="logo" className="logo"/>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar