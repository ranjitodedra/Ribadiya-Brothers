import React from "react";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { GiShoppingBag } from 'react-icons/gi';
// import { FaTimes } from 'react-icons/fa';
import { FaShoppingCart, FaUser, FaOutdent } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { AiOutlineSearch } from 'react-icons/ai';
// import { FaRegUserCircle } from 'react-icons/fa';
import "./Navbar.css";
import logo from "../../../images/go.jpg";
import SearchField from "react-search-field";
import UserOptions from "./UserOptions_no";

function Navbar(props) {
  const dispatch = useDispatch();
  const {isAuthenticated } = useSelector(
    (state) => state.user
  );
  return (
    <div>
      {/* <topheading>Ribadiya Brothers</topheading> */}
      <section id="header">
        <a href="#">
          <img src={logo} class="logo" alt="" width="300px" height="60px" />
          {/* <h4>Ribadiya Brothers</h4> */}
        </a>

        <div>
          <ul id="navbar">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Saree</NavLink>
            </li>
            <li>
              <NavLink to="/products">Chaniya Choli</NavLink>
            </li>
            <li>
              <NavLink to="/products">Gowns</NavLink>
            </li>
            <li>
            {isAuthenticated ? (
              <>
                <li class="nav-item">
                  <UserOptions/>
                </li>
              </>
            ) : (
              <>
                <li class="nav-item">
                  <NavLink exact className="nav-link active" to="/login">
                    Login
                  </NavLink>
                </li>
              </>
            )}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
export default Navbar;
