import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Link, Route } from "react-router-dom";
import CartPage from "./Display/CartPage";
import HomePage from "./Display/HomePage";
import ProductPage from "./Display/ProductPage";
import SignIn from "./Display/SignIn";
import Learn from "./Display/Learn";
import Footer from "./Display/Footer";
import Register from "./Display/Register";

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

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
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/SignIn">
              <i class="fas fa-user-alt"></i>
            </Link>
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartPage}></Route>
          <Route path="/product/:id" component={ProductPage}></Route>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/SignIn" component={SignIn}></Route>
          <Route path="/Learn" component={Learn}></Route>
          <Route path="/Register" component={Register}></Route>
        </main>
        <footer className="row center">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
