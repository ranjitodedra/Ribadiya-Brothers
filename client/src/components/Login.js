import React from 'react'
import styled from 'styled-components';
// import {faFacebookf} from 'react-icons';

const Login = () => {
  return (
    <>
    <div className="container">
    <div className="wt">
    <h2>Login</h2></div>
   
   <div className="inputcont">
   <input type="text" placeholder='Email' />
    <input type="password" placeholder='Password' />
    {/* <input type="password" placeholder='Password' /> */}
   </div>
   <p className='fp'><a href="#">Forgot Password ?</a></p>
   <button className='btn'>Submit</button>


   
   <div className="acc"><a href="#">
     Don't have an account? </a>
     
   </div>

    </div>
   
    </>
  )
}


export default Login
