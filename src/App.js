import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import CartPage from "./Display/CartPage";
import HomePage from "./Display/HomePage";
import ProductPage from "./Display/ProductPage";
import SignIn from "./Display/SignIn";
import { signout } from "./actions/SignInAction";
import Learn from "./Display/Learn";
import Footer from "./Display/Footer";
import Register from "./Display/Register";
import ShippingAddressPage from "./Display/ShippingAddressPage";
import PaymentPage from "./Display/PaymentPage";
import PlaceOrder from "./Display/PlaceOrder";
import orderPage from "./Display/OrderPage";
import PaymentForm from "./Display/PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51JlzBFCtDai4X8WKV1jVdxghyVrStrSYn6JiAqJjtEVWpcmtBNuId8ZCgHpRxuckqCVkamfX9IGepJBh2CDGzUhT00yFQicNfk"
);

function App(props) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/home">
              ANJU
            </Link>
          </div>

          <div>
            <Link to="/">Shop</Link>

            <Link to="/Learn">Learn</Link>

            <Link to="/cart">
              <i class="fas fa-shopping-cart"></i>

              {cartItems.length > 0 && (
                <span class="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{" "}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/SignIn">
                <i class="fas fa-user-alt"></i>
              </Link>
            )}
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartPage}></Route>
          <Route path="/product/:id" component={ProductPage}></Route>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/SignIn" component={SignIn}></Route>
          <Route path="/Learn" component={Learn}></Route>
          <Route path="/Register" component={Register}></Route>
          <Route path="/Shipping" component={ShippingAddressPage}></Route>
          <Route path="/payment" component={PaymentPage}></Route>
          <Route path="/order/:id" component={orderPage}></Route>
          <Route path="/placeorder" component={PlaceOrder}></Route>
          <Elements stripe={promise}>
            <Route path="/PaymentForm" component={PaymentForm}></Route>
          </Elements>
        </main>
        <footer className="row center">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
