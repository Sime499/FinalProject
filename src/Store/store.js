//define  initial state for
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  productListReducer,
  productDetailReducer,
} from "../reducers/productReducer";

import { cartReducer } from "../reducers/cartReducer";
import { userSigninReducer, registerReducer } from "../reducers/signInReducer";

//initial value of cartReduce
const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },

  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};

const reducer = combineReducers({
  // accept parameter which is object which introducer reducer to store
  productList: productListReducer,
  productDetails: productDetailReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  register: registerReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
