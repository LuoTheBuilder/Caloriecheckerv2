import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Grid, Button } from "@mui/material";
import { addToMenu } from "../../actions/Menu";
import Input from "../UI/Input";
import Cardm from "../UI/Card";

const AddMeal = ({ user }) => {
  const dispatch = useDispatch();

  const [meal, setMeal] = useState({
    menuItem: "",
    calories: 0,
    rating: "",
    Ingredients: "",
    user: user._id,
  });

  const changeHandler = (e) => {
    setMeal({ ...meal, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addToMenu(meal));
  };
  return (
    <div>
      <Cardm title="Add Meal">
        <Grid container spacing={2} component="form" onSubmit={submitHandler}>
          <Input
            label="Meal Name"
            id="menuItem"
            value={meal.menuItem}
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
            label="Rating"
            type="Number"
            id="rating"
            value={meal.rating}
            onChange={changeHandler}
          />
          <Input
            label="Ingredients"
            type="text"
            id="ingredients"
            value={meal.ingredients}
            onChange={changeHandler}
          />

          <Grid item xs={12}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Cardm>
    </div>
  );
};

export default AddMeal;
