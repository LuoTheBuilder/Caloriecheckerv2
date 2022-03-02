import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Card, Box, Grid, Button } from "@mui/material";
import { addMeal } from "../../actions/meals";
import Input from "../UI/Input";
import classes from "./AddMeal.module.css";
const AddMeal = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();

  const [meal, setMeal] = useState({
    mealName: "",
    calories: 0,
    date: "",
    user: user._id,
  });

  const changeHandler = (e) => {
    setMeal({ ...meal, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addMeal(meal));
  };
  return (
    <Container component="main" maxWidth="xl">
      <Card className={classes.card}>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1>Add A Meal</h1>
            <Grid
              container
              spacing={2}
              component="form"
              onSubmit={submitHandler}
            >
              <Input
                label="Meal Name"
                id="mealName"
                value={meal.mealName}
                onChange={changeHandler}
              />
              <Input
                label="Calories"
                type="number"
                id="calories"
                value={meal.calories}
                onChange={changeHandler}
              />
              <Input
                label=""
                type="date"
                id="date"
                value={meal.date}
                onChange={changeHandler}
              />
              <Grid item xs={12}>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Card>
    </Container>
  );
};

export default AddMeal;
