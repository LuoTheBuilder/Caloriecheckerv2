import { AppBar, Toolbar, Typography, Linkstyle, Button } from "@mui/material";
import React, { useState } from "react";
import logo from "../../Assets/logo.png";
import classes from "./HeaderBar.module.css";
import { Link } from "react-router-dom";

const HeaderBar = (props) => {
  const [login, setLogin] = useState(false);
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <img className={classes.logo} src={logo} />
        <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Calorie Checker
        </Typography>
        {/* <nav>
          <Link
            variant="button"
            color="text.primary"
            href="#"
            sx={{ my: 1, mx: 1.5 }}
          >
            Features
          </Link>
        </nav> */}

        <Link to="/login">
          <Button variant="primary" sx={{ my: 1, mx: 1.5 }}>
            {login ? "Logout" : "login"}
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
