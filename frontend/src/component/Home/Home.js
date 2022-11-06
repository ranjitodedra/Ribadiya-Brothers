import React, { Fragment, useEffect } from 'react';
// import Cards from '../layout/Card/Card';
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css";
// import bg1 from '../../images/i1.jpg';
import c1 from '../../images/rb-c1.png'
// import bg2 from '../../images/i2.jpg';
// import bg3 from '../../images/i3.jpg';
// import bgi1 from '../../images/bgi1.jpg'
// import bgi2 from '../../images/bgi2.jpg'
import bgi3 from '../../images/bgi3.jpg'
import bgi4 from '../../images/bgi4.jpg'
// import img1 from '../../images/img1.png';
// import img2 from '../../images/img2.png';
// import img3 from '../../images/img3.png';
// import img4 from '../../images/img4.png';
// import b1 from '../../images/b1.jpg';  
import b2 from '../../images/rb-b3.png';
// import f1 from '../../images/f1.jpg';
import catsaree from "../../images/f2.jpg"
import catcc from "../../images/f3.jpg"
import catg from "../../images/img3.png"
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import whitebg from '../../images/whitebg.jpg';
// import { FaShoppingCart } from 'react-icons/fa';
// import { FaStar } from 'react-icons/fa';
// import { CgMouse } from "react-icons/all";
import ProductCard from "./ProductCard.js";
// import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
// import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import { NavLink } from 'react-router-dom';
// import { Title } from 'chart.js';

const Home = () => {

  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);


  return (

    <div>
      {/* --- Heropart ---  */}
      <section id='hero'>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 img"
              src={c1}
              alt="First slide"
            />

            <Carousel.Caption>
              {/* <div className='headline'>
                <p className='tag-bit'>Womens collection</p>
                <p className='tagline'>For colorfull steps in life</p>
                <button className='btn btn-outline-dark btn-head'>SHOP NOW</button>
              </div> */}
              {/* <h1>title 1</h1> */}
              

            </Carousel.Caption>

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img"
              src={bgi3}
              alt="Second slide"
            />

            <Carousel.Caption>
              {/* <div className='headline'>
                <p>Highest Quility <br /> Honest prices</p>
              </div> */}
              {/* <h1>title 1</h1> */}
              
            </Carousel.Caption>

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img"
              src={bgi4}
              alt="Third slide"
            />

            <Carousel.Caption>
              {/* <div className='headline'>
                <p>
                  Discover
                </p>
              </div> */}
              {/* <h1>title 1</h1> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </section>

      {/* Featured Products */}
      <section className='featured-products'>
        <h2 className="homeHeading">Categories</h2>
        <div className="trending" >

          <div className="cat1">
            <img src={catsaree}></img>
            <div className="info">
              <h3 className='cat-head'>Saree</h3>
              <button className='b1'><NavLink className="see-more" to="/saree">See More</NavLink></button>
            </div>
          </div>

          <div className="cat1">
            <img src={catcc}></img>
            <div className="info">
              <h3 className='cat-head'>Chaniya Choli</h3>
              <button className='b2'><NavLink className="see-more" to="/chaniya-choli">See More</NavLink></button>
            </div>

          </div>

          <div className="cat1">
            <img src={catg}></img>
            <div className="info">
              <h3 className='cat-head'>Gowns</h3>
              <button className='b3'><NavLink className="see-more" to="/gowns">See More</NavLink></button>
            </div>
          </div>

        </div>
      </section>

      {/* Banner */}
      <section className='banner1'>
        <img src={b2} alt="" />
      </section>

      {/* Featured Products */}
      <section className='featured-products'>
        <h2 className="homeHeading">Featured Products</h2>
        <div className="container" id="container">
          {products &&
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
      </section>





    </div>
  );
}

export default Home