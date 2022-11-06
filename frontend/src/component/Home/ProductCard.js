import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import f4 from '../../images/f2.jpg';
// import p1 from '../../images/p1.jpg'
import { FaShoppingCart} from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={f4} alt={product.name} />
    
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}

        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
     
      </div>
      <div className="cart1">
      <span>{`₹${product.price}`}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
