import HomePage from "./Display/HomePage";
import ProductPage from "./Display/ProductPage";
import { BrowserRouter, Route } from "react-router-dom";
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
            <a href="/Shop" class="">
              Shop
            </a>
            <a href="/Shop" class="">
              Sign In
            </a>
            <a href="/Cart" class="">
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
