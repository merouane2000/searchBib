import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <AppBar
      component="nav"
      style={{ backgroundColor: "#EAF6F6", position: "sticky" }}
    >
      <Grid container xs={12} direction="row" alignItems="center">
        <Grid xs={4} xsOffset={0.5}>
          <img
            style={{ width: 110, height: 110 }}
            src="Capture-modified.PNG"
            alt="React Logo"
          />
        </Grid>
        <Grid
          xs={2}
          style={{
            padding: 24,
            fontSize: 20,
            color: "black",
            fontWeight: "Bold",
          }}
        >
          <Link
            to="/ourproject"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "Bold",
            }}
          >
            <Typography variant="h5"> Our Project</Typography>
          </Link>
        </Grid>
        <Grid
          xs={2}
          style={{
            padding: 24,
            fontSize: 20,
          }}
        >
          <Link
            to="/members"
            underline="none"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "Bold",
            }}
          >
            <Typography variant="h5">Members</Typography>
          </Link>
        </Grid>
        <Grid
          xs={2}
          style={{
            padding: 24,
            fontSize: 20,
          }}
        >
          <Link
            to="/li"
            underline="none"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "Bold",
            }}
          >
            <Typography variant="h5">LI</Typography>
          </Link>
        </Grid>
        <Grid
          xs={1}
          style={{
            padding: 24,
            fontSize: 20,
          }}
        >
          <Link
            to="/lc"
            underline="none"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "Bold",
            }}
          >
            <Typography variant="h5">LC</Typography>
          </Link>
        </Grid>
      </Grid>
    </AppBar>
  );
}
export default NavBar;
