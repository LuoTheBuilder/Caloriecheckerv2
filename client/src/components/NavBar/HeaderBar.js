import { AppBar, Toolbar, Typography, Linkstyle, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import logo from "../../Assets/logo.png";
import classes from "./HeaderBar.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const HeaderBar = ({ color }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  return (
    <AppBar className={classes.appBar} color={color} elevation={0}>
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Link to="/">
          <img className={classes.logo} src={logo} />
        </Link>
        <Typography variant="h5" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <b>Calorie </b>Checker
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

        {user ? (
          <>
            <Link to="/myhome"> Hi, {user.name}</Link>
            <Button
              onClick={logoutHandler}
              variant="text"
              sx={{ my: 1, mx: 1.5 }}
            >
              Logout
            </Button>
          </>
        ) : (
          <Button variant="contained" component={Link} to="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
