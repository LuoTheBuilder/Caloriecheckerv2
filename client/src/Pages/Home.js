import React, { Fragment } from "react";
import { Button, Container, Grid, Box } from "@mui/material";
import classes from "./Home.module.css";

export const Home = () => {
  return (
    <Fragment>
      <Container>
        <main className={classes.main}>
          <div className={classes.title}>
            <p>Take control of your meal prep goals</p>
            <h2>
              Easily manage calorie intake and nutrient distribution in one
              place for a healthier, happier lifestyle.
            </h2>
            <Button className={classes.button} variant="contained">
              Sign up
            </Button>
            <Button className={classes.button} variant="contained">
              Sign In
            </Button>
          </div>
        </main>
      </Container>
    </Fragment>
  );
};
