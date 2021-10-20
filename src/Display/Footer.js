import { BrowserRouter, Link, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signout } from "../actions/userActions";
import SignIn from "./SignIn";
import Learn from "./Learn";
import Register from "./Register";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

export default function Footer() {
  const signoutHandler = () => {
    dispatch(signout());
  };

  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div>
        <Route path="/SignIn" component={SignIn}></Route>
        <Route path="/Learn" component={Learn}></Route>
      </div>

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
                <Link to="/signin">Sign In</Link>
              </Box>
              <Box>
                <Link to="#signout" onClick={signoutHandler}>
                  Sign Out
                </Link>
              </Box>
              <Box>
                <Link to="/contact">contact</Link>
              </Box>
            </Grid>
            <Grid item spacing xs={12} sm={4}>
              <Box>Follow ANJU Coffee </Box>
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
    </BrowserRouter>
  );
}
