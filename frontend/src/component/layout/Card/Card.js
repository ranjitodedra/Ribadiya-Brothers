import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import img2 from '../../../images/img2.png'

const Card = () => {
  return (
    <section id='product1'>
    <div class="pro-container">
    <div class="pro">
      <img src={img2} />
      <div class="des">
        <span>Mango</span>
        <h5>Green solid a-line dress V-neck Short puff sleeve </h5>
        <div class="star">
          <i class="fa fa-star" ></i>
          <i class="fa fa-star" ></i>
          <i class="fa fa-star" ></i>
          <i class="fa fa-star" ></i>
          <i class="fa fa-star" ></i>
        </div>
        <h4>Rs. 5000</h4>
      </div>
      <a href="#"><i className='cart'><FaShoppingCart></FaShoppingCart></i></a>
    </div>
    </div>

    </section>
  )
}

export default Card
