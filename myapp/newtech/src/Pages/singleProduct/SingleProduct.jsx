
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaShoppingCart, FaMoneyBillWave } from "react-icons/fa";
import image from "./2.jpg";
import "./singleProduct.css";

const SingleProduct = ({ product, addToCart, addToWishlist, buyNow }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product-container">
      <motion.div
        className="product-image"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={image} />
      </motion.div>

      <div className="product-details">
        <h2 className="product-title">Mac Book</h2>
        <p className="price">$10000</p>
        <p className="description">TTTTTTTTTTTTTTTTtttttttttt</p>

        <div className="quantity-selector">
          <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>

        <div className="buttons">
          <button className="cart-btn" onClick={() => addToCart(product, quantity)}>
            <FaShoppingCart /> Add to Cart
          </button>
          <button className="buy-btn" onClick={() => buyNow(product, quantity)}>
            <FaMoneyBillWave /> Buy Now
          </button>
          <button className="wishlist-btn" onClick={() => addToWishlist(product)}>
            <FaHeart /> Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
