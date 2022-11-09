import React, { Fragment, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css";
import c1 from '../../images/rb-c1.png'
import bgi3 from '../../images/bgi3.jpg'
import bgi4 from '../../images/bgi4.jpg' 
import b2 from '../../images/rb-b3.png';
import catsaree from "../../images/f2.jpg"
import catcc from "../../images/f3.jpg"
import catg from "../../images/img3.png"
import ProductCard from "./ProductCard.js";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { NavLink } from 'react-router-dom';

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
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img"
              src={bgi3}
              alt="Second slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 img"
              src={bgi4}
              alt="Third slide"
            />
            <Carousel.Caption></Carousel.Caption>
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
              <button className='b1'><NavLink className="see-more" to="/products">See More</NavLink></button>
            </div>
          </div>

          <div className="cat1">
            <img src={catcc}></img>
            <div className="info">
              <h3 className='cat-head'>Chaniya Choli</h3>
              <button className='b2'><NavLink className="see-more" to="/products">See More</NavLink></button>
            </div>

          </div>

          <div className="cat1">
            <img src={catg}></img>
            <div className="info">
              <h3 className='cat-head'>Gowns</h3>
              <button className='b3'><NavLink className="see-more" to="/products">See More</NavLink></button>
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