import { BrowserRouter, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../actions/userActions";
import SignIn from "./SignIn";
import Learn from "./Learn";
import Register from "./Register";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import "./Footer.css";

export default function Footer() {
  const signoutHandler = () => {
    dispatch(signout());
  };

  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="page-wrap">
        <div className="page-footer">
          <div className="footer content">
            <div className="row col">
              <div className="footer-columns footer-columns-1">
                <div className="col col1">
                  <div className="title">Learn</div>
                  <ul>
                    <li>
                      <Link to="/Learn">Learn</Link>
                    </li>
                    <li>
                      <Link to="#">Our Coffee</Link>
                    </li>
                    <li>
                      <Link to="#">Our Story</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col col2">
                <div className="title">Account</div>
                <ul>
                  <li>
                    <Link to="/SignIn">Sign In</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col col3">
                <div className="title">Customer</div>
                <ul>
                  <li>
                    <Link to="/contact">Contact US</Link>
                  </li>
                  <li>
                    <Link to="/wholeSale">WholeSale</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-columns footer-columns-2">
          <div className="col col-logo">ANJU COFFEE</div>
          <div className="col col-social">
            <div className="title">Follow ANJU Coffee</div>
            <div className="footer-social">
              <div className="sm">
                <Link target="_blank" to="https://facebook.com">
                  <i class="fab fa-facebook"></i>
                </Link>
              </div>
              <div className="sm">
                <Link to="https://twitter.com">
                  <i class="fab fa-twitter"></i>
                </Link>
              </div>
              <div className="sm">
                <Link to="https://www.instagram.com">
                  <i className="fab fa-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
