import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

export default function Footer() {
  return (
    <footer className="Footer-Container">
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
                <Link to="/Learn">SignIn</Link>
              </Box>
              <Box>
                <Link to="/Shop">SignIn</Link>
              </Box>
              <Box>
                <Link to="/Contact">Contact</Link>
              </Box>
            </Grid>
            <Grid item spacing xs={12} sm={4}>
              <Box>Social Media</Box>
              <Box>
                <Link to="/Learn">Twitter</Link>
              </Box>
              <Box>
                <Link to="/Shop">Facebook</Link>
              </Box>
              <Box>
                <Link to="/Contact">Instagram</Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box className="footer">
          Sime and Cory &reg;{new Date().getFullYear()}
        </Box>
      </Box>
    </footer>
  );
}
