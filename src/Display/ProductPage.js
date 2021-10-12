import React from "react";
import data from "../data";
import Rating from "../components/Rating.js";

export default function ProductPage(props) {
  //define product use find function(array function) based on the defined object
  //searching for x_,id which is the id of the product inside products array
  // and comparing with the  value user enter (props.match.params.id)

  const product = props.match.params.id;
  if (!product) {
    return <div> product does not exist</div>;
  }
  return (
    <div className="row top">
      <div className="col-image">
        <img className="large" src={product.image} alt={product.name}></img>
      </div>
      <div className="col-description">
        <ul>
          <li>
            <h1>{product.name}</h1>
          </li>
          <li>
            <Rating
              rating={product.rating}
              numReviews={product.numReviews}
            ></Rating>
          </li>
          <li> Price:${product.price}</li>
          <li>
            Description:<p>{product.description}</p>
          </li>
        </ul>
      </div>

      <div className="col-action">
        <div className="card cart-body">
          <ul>
            <li>
              <div className="row">
                <div>Price</div>
                <div className="price">$ {product.price}</div>
              </div>
            </li>
            <li>
              <div className="row">
                <div>Status</div>
                <div>
                  {product.countInStock > 0 ? (
                    <span className="success">In Stock</span>
                  ) : (
                    <span className="error">out of Stock</span>
                  )}
                </div>
              </div>
            </li>
            <li>
              <button className="btn-1">Add to Cart</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
