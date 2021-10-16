//define  initial state for
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  productListReducer,
  productDetailReducer,
} from "../reducers/productReducer";

import { cartReducer } from "../reducers/cartReducer";
import { signInReducer, registerReducer } from "../reducers/signInReducer";

//initial value of cartReduce
const initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};

const reducer = combineReducers({
  // accept parameter which is object which introducer reduct to store
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
  signIn: signInReducer,
  register: registerReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
