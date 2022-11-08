import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { GiShoppingBag } from 'react-icons/gi';
// import { FaTimes } from 'react-icons/fa';
import { FaShoppingCart, FaUser, FaOutdent } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { FaRegUserCircle } from 'react-icons/fa';
import "./Navbar.css";
import logo from '../../../images/go.jpg'
import SearchField from "react-search-field";

function Navbar() {
  return (

    <div>
      {/* <topheading>Ribadiya Brothers</topheading> */}
      <section id="header">
        <a href="#">
          <img
            src={logo}
            class="logo"
            alt=""
            width="300px"
            height="60px" />
          {/* <h4>Ribadiya Brothers</h4> */}

        </a>

        <div>

          <ul id="navbar">
            <li><SearchField
                placeholder="Search..."
                // onChange={onChange}
                searchText="Search Products"
                classNames="test-class"
              /></li>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">Saree</NavLink></li>
            <li><NavLink to="/products">Chaniya Choli</NavLink></li>
            <li><NavLink to="/products">Gowns</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li id="bag">
              <NavLink className="cart-style" to="/account">
                <i><FaUser />User</i>
              </NavLink>
            </li>
            <li id="bag">
              <NavLink className="cart-style" to="/cart">
                <i><FaShoppingCart />Cart</i>
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
export default Navbar;