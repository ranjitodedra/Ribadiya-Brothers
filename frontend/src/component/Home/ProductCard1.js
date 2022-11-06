import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import f4 from '../../images/f4.jpg';
import { FaShoppingCart} from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard1" to={`/product/${product._id}`}>
      <img src={f4} alt={product.name} />
    
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan1">
          {" "}
          ({product.numOfReviews} Reviews)
          
        </span>
     
      </div>
      <div className="cart2">
      <span>{`₹${product.price}`}</span>
      {/* <FaShoppingCart /> */}
      </div>
    
      <button className="btn1  mb-2 mt-2 ">Add To Cart</button>
      <button className="btn1 ">Buy Now</button>
    </Link>
  );
};

export default ProductCard;
