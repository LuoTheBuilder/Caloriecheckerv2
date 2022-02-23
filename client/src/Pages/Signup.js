import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/users";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../components/Boilerplate/Copyright";

export const Signup = ({ history }) => {
  const [user, setUserData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confPass: "",
    error: "",
  });

  const [confPass, setConfPass] = useState("");
  const [error, setError] = useState("");

  const theme = createTheme();
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (user.password !== confPass) {
      setError("The passwords do not match.");
      setUserData({ ...user, password: "" });
      setConfPass("");
    } else {
      dispatch(register(user));
      history.push("/");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={submitHandler}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                  name="firstname"
                  value={user.firstname}
                  onChange={(e) => {
                    setUserData({ ...user, firstname: e.target.value });
                  }}
                />
              </Grid>{" "}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  value={user.lastname}
                  onChange={(e) => {
                    setUserData({ ...user, lastname: e.target.value });
                  }}
                />
              </Grid>{" "}
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  value={user.username}
                  autoComplete="email"
                  onChange={(e) => {
                    setUserData({ ...user, username: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={user.email}
                  autoComplete="email"
                  onChange={(e) => {
                    setUserData({ ...user, email: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={user.password}
                  autoComplete="new-password"
                  onChange={(e) => {
                    setUserData({ ...user, password: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="Password"
                  id="confirmPassword"
                  value={confPass}
                  autoComplete="new-password"
                  onChange={(e) => {
                    setConfPass(e.target.value);
                  }}
                />
                {error && <span style={{ color: "red" }}>{error}</span>}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};
