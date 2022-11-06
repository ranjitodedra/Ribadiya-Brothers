import React from 'react'
import {FaYoutube} from 'react-icons/fa';
import {ImPinterest2} from 'react-icons/im';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BsInstagram} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {FaFacebook} from 'react-icons/fa';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
    <footer class="section-p1">
    <div class="col">
     <h2>Ribadiya Brothers</h2>
     <h4></h4>
      {/* <h4>Contact</h4> */}
      <p><b>Address:</b> 301, Shitvan Palace-1 , Saurashtra Kala Kendra , Rajkot</p>
      <p><b>Phone:</b> 1234567890</p>
      <p><b>Hours:</b> 10:00 - 18:00 , Mon - Sat</p>

     <div class="follow">
        <h4>Follow Us</h4>
        <div class="icon">
          <i><BsInstagram></BsInstagram></i>
          <i><BsTwitter></BsTwitter></i>
          <i><FaFacebook></FaFacebook></i>
          <i><FaYoutube></FaYoutube></i>
          <i><ImPinterest2></ImPinterest2></i>
        </div>
      </div>
    </div>

    <div class="col">
        <h4>About</h4>
        <a href="#">About Us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy policy</a>
        <a href="#">Terms and Conditions</a>
        <a href="#">Contact us</a>
    </div>

    <div class="col">
        <h4>My Account</h4>
        <a href="#">My Account</a>
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">My Wishlist</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
    </div>

    <div class="col install">
        <h4>News Latter</h4>
        {/* <p>From App Store or Google Play</p> */}
        <div class="row">
         <input type="text" placeholder='Enter E-mail Id' />
         <button>Submit</button>
        </div>
        {/* <p>Secured Payment Gateways</p> */}
        
    </div>

    <div class="copyright">
        <p>© 2022, Ribadiya Brothers</p>
    </div>
</footer>
</div>
 
  )
}

export default Footer
