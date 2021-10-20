import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import CartPage from "./Display/CartPage";
import HomePage from "./Display/HomePage";
import ProductPage from "./Display/ProductPage";
import SignIn from "./Display/SignIn";
import { signout } from "./actions/userActions";
import Learn from "./Display/Learn";
import Footer from "./Display/Footer";
import Register from "./Display/Register";
import ShippingAddressPage from "./Display/ShippingAddressPage";
import PlaceOrder from "./Display/PlaceOrder";
import orderPage from "./Display/orderPage";
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './Display/ProductListScreen';
import ProfileScreen from './Display/ProfileScreen';
import OrderListScreen from './Display/OrderListScreen';
import ProductEditScreen from './Display/ProductEditScreen';
import PrivateRoute from './components/PrivateRoute';
import PaymentMethodScreen from './Display/PaymentMethodScreen';



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
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/profile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Products</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Orders</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Users</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>        
          </header>
        <main>
        <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>
          <Route path="/cart/:id?" component={CartPage}></Route>
          <Route path="/product/:id" component={ProductPage}></Route>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/SignIn" component={SignIn}></Route>
          <Route path="/Learn" component={Learn}></Route>
          <Route path="/Register" component={Register}></Route>
          <Route path="/Shipping" component={ShippingAddressPage}></Route>
          <Route path="/Payment" component={PaymentMethodScreen}></Route>
          <Route path="/order/:id" component={orderPage}></Route>
          <Route path="/PlaceOrder" component={PlaceOrder}></Route>
          <PrivateRoute
            path="/profile"
            component={ProfileScreen}
          ></PrivateRoute>
          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
          ></AdminRoute>
          <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
          ></AdminRoute>
        </main>
        <footer className="row center">
          
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
