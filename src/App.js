import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./Display/HomePage";
import ProductPage from "./Display/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/ANJU">
              <h1> ANJU Coffee</h1>
            </a>
          </div>
          <div>
            <a href="/Shop" className="">
              Shop
            </a>
            <a href="/Shop" className="">
              Sign In
            </a>
            <a href="/Cart" className="">
              Cart
            </a>
          </div>
        </header>
        <main>
          <Route path="/" component={HomePage} exact></Route>
          <Route path="/product/:id" component={ProductPage}></Route>
        </main>
        <footer>
          <p className="row footer">All right is preserved</p>
          <p>cory and sime</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
