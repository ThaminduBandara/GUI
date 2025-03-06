
import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import { FaHeart, FaShoppingCart, FaMoneyBillWave } from "react-icons/fa";
import "./singleProduct.css";

const SingleProduct = () => {
 


  const location = useLocation();
  const product = location.state?.product;


  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-container">
      <motion.div
        className="product-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={product.image_url} />
      </motion.div>

      <div className="product-details">
        <h2 className="product-title">{product.name}</h2>
        <p className="price">{product.price}</p>
        <p className="description">{product.description}</p>

    


        <div className="quantity-selector">
          <button onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>



        <div className="buttons">
          <button className="cart-btn" > 
            <FaShoppingCart /> Add to Cart
          </button>
          <button className="buy-btn" >
            <FaMoneyBillWave /> Buy Now
          </button>
          <button className="wishlist-btn" >
            <FaHeart /> Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;



