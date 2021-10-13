//define  initial state for
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  productListReducer,
  productDetailReducer,
} from "../reducers/productReducer";

const initialState = {};
const reducer = combineReducers({
  // accept parameter which is object which introducer reduct to store
  productList: productListReducer,
  productDetails: productDetailReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
