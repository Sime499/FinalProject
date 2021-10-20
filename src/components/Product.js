import { Link } from "react-router-dom";
import Rating from "./Rating";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Product(props) {
  const { product } = props;

  const dispatch = useDispatch();
  const addToCartHandler = () => {
    props.history.push(`/cart/${product}`);
  };

  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        <Rating
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <div className="price">${product.price}</div>
        <div className="Add-to-cart">Add To Cart</div>
      </div>
    </div>
  );
}
