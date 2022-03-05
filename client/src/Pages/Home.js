import React, { Fragment } from "react";
import { Button, Container, Grid, Box } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";

//Home page with link to signup or login. No features or conversion tactics used here.

export const Home = () => {
  return (
    <Fragment>
      <div
        className={classes.background}
        style={{
          backgroundImage: `url("/background.jpg")`,
          backgroundSize: "cover",
        }}
      >
        <Container>
          <main className={classes.main}>
            <div className={classes.title}>
              <p>Take control of your meal prep goals</p>
              <h2>
                Easily manage calorie intake and nutrient distribution in one
                place for a healthier, happier lifestyle.
              </h2>
              <Link
                to="/login"
                component={Button}
                className={classes.button}
                variant="contained"
              >
                Sign in
              </Link>
              <Link
                to="/login"
                component={Button}
                className={classes.button}
                variant="contained"
              >
                Sign up
              </Link>
            </div>
          </main>
        </Container>
      </div>
    </Fragment>
  );
};
