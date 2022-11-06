import React, { Fragment, useEffect } from 'react';
import './Saree.css';
import bgi1 from '../../images/bgi1.jpg'
import ProductCard1 from '../Home/ProductCard1.js';
import ProductCard from '../Home/ProductCard.js';
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";

function Gowns() {
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
     <section id='saree-head'>
        <img src={bgi1} alt="" />
     </section>

     <div className='part'>

     {/* <section id='Filter'>
        <h2>Filter</h2>
     </section> */}

  
      <div className='featured-products'>
        <h2 className="homeHeading">Bridal wear</h2>
      </div> 
      <div className=' container-fluid mx-2'>
        <div className="row mt-5 mx-2">
          <div className="col-md-3">
          <button className='btn btn-warning w-100 mb-4 '>Size</button>
          <button className='btn btn-warning w-100 mb-4 '>Colors</button>
          <button className='btn btn-warning w-100 mb-4 '>Ratings</button>
          </div>
          <div className="col-md-9">
          <div className="row">
            {/* <div className="col-md-4"> */}
            <div className="container1" id="container1">
          {products &&
            products.map((product) => (
              <ProductCard1 key={product._id} product={product} />
            ))}
        </div>
            {/* </div> */}
          </div>
          </div>
        </div>
      </div>
      </div>

      
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

export default Gowns;
