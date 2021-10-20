import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import CartPage from "./Display/CartPage";
import HomePage from "./Display/HomePage";
import ProductPage from "./Display/ProductPage";
import SignIn from "./Display/SignIn";
import { signout } from "./actions/SignInAction";
import Learn from "./Display/Learn";
import Home from "./Display/Home";
import Register from "./Display/Register";
import ShippingAddressPage from "./Display/ShippingAddressPage";
import PaymentPage from "./Display/PaymentPage";
import PlaceOrder from "./Display/PlaceOrder";
import orderPage from "./Display/OrderPage";
import PaymentForm from "./Display/PaymentForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import ContactForm from "./components/ContactForm";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

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
          <Route path="/contact" component={ContactForm}></Route>

          <Elements stripe={promise}>
            <Route path="/PaymentForm" component={PaymentForm}></Route>
          </Elements>
          <Home />
        </main>
        <footer className="row center">
          <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} color="white">
            <Container maxWidth="lg">
              <Grid container spacing={5}>
                <Grid item spacing xs={12} sm={4}>
                  <Box>Learn</Box>
                  <Box>
                    <Link to="/Learn">Our Story</Link>
                  </Box>
                  <Box>
                    <Link to="/Shop">Our Coffee</Link>
                  </Box>
                  <Box>
                    <Link to="/Contact">WholeSale</Link>
                  </Box>
                </Grid>
                <Grid item spacing xs={12} sm={4}>
                  <Box>Account</Box>
                  <Box>
                    <Link to="/signin">SignIn</Link>
                  </Box>
                  <Box>
                    <Link to="/signout">Sign Out</Link>
                  </Box>
                  <Box>
                    <Link to="/Contact">contact</Link>
                  </Box>
                </Grid>
                <Grid item spacing xs={12} sm={4}>
                  <Box>Social Media</Box>
                  <Box>
                    <a href="https://www.instagram.com/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </Box>
                  <Box>
                    <a href="https://twitter.com">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </Box>
                  <Box>
                    <a href="https://www.facebook.com/">
                      <i class="fab fa-facebook"></i>
                    </a>
                  </Box>
                </Grid>
              </Grid>
            </Container>
            <Box className="footer">
              Sime and Cory &reg;{new Date().getFullYear()}
            </Box>
          </Box>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
