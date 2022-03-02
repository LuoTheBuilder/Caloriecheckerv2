import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import {
  Link,
  Grid,
  CssBaseline,
  Button,
  Avatar,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { register, login } from "../actions/users";
import Copyright from "../components/Boilerplate/Copyright";
import Icon from "../Assets/Google";
import Input from "../components/UI/Input";

export const Login = () => {
  const [signup, setSignup] = useState(false);
  const [error, setError] = useState("");
  const [user, setUserData] = useState({
    name: "",
    GivenName: "",
    username: "",
    email: "",
    password: "",
    confPass: "",
  });

  const theme = createTheme();
  const dispatch = useDispatch();
  const history = useHistory();

  const statusHandler = () => {
    setSignup((prevSignup) => !prevSignup);
  };
  const changeHandler = (e) => {
    setUserData({ ...user, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (signup) {
      if (user.password !== user.confPass) {
        setError("The passwords do not match.");
        setUserData({ ...user, password: "", confPass: "" });
      } else {
        dispatch(register(user, history, setError));
      }
    } else {
      dispatch(login(user, history, setError));
      history.push("/myhome");
    }
  };

  const googleSuccess = async (res) => {
    const response = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: "AUTH", data: { response, token } });
      history.push("/myhome");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = () => {};

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
            {signup ? "Sign Up" : "Sign In"}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={submitHandler}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              {signup && (
                <>
                  <Input
                    id="name"
                    label="First Name"
                    value={user.name}
                    onChange={changeHandler}
                  />
                  <Input
                    id="givenName"
                    label="Last Name"
                    value={user.givenName}
                    onChange={changeHandler}
                  />
                  <Input
                    id="username"
                    label="Username"
                    value={user.username}
                    onChange={changeHandler}
                  />
                </>
              )}

              <Input
                id="email"
                label="Email Address"
                type="email"
                value={user.email}
                onChange={changeHandler}
              />
              <Input
                id="password"
                label="Password"
                type="password"
                value={user.password}
                onChange={changeHandler}
              />
              {signup && (
                <>
                  <Input
                    id="confPass"
                    label="Confirm Password"
                    value={user.confPass}
                    type="password"
                    onChange={changeHandler}
                  />
                </>
              )}
              {error && <span style={{ color: "red" }}>{error}</span>}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {signup ? "Sign Up" : "Sign In"}
            </Button>
            <GoogleLogin
              clientId="792050151412-m9t1ormjgefl7h4ojia93qcrgjjim39n.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  // className={classes.googleButton}
                  color="primary"
                  fullWidth
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  startIcon={<Icon />}
                  variant="contained"
                >
                  Google Sign In
                </Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={statusHandler}>
                  {signup
                    ? "Already have an account? Sign in"
                    : "Don't have an account? Sign up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};
