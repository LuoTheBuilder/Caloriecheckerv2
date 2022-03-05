import Input from "../../UI/Input";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./QuickAdd.module.css";
import { Button, Grid } from "@mui/material";
import { addMeal } from "../../../actions/meals";

const NewAdd = ({ setQuickAdd }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  // const [dropdown, setDropdown] = useState(true);

  const [meal, setMeal] = useState({
    mealName: "",
    calories: "",
    rating: "",
    date: "",
    user: user._id,
  });

  const changeHandler = (e) => {
    setMeal({ ...meal, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addMeal(meal));
    setQuickAdd();
  };
  return (
    <Grid component="form" onSubmit={submitHandler}>
      <div className={classes.container}>
        <Fragment>
          <div className={classes.entry}>
            <Input
              className={classes.input}
              label="Meal Name"
              id="mealName"
              onChange={changeHandler}
            />
          </div>
          <div className={classes.entry}>
            <Input
              label="Calories"
              type="number"
              id="calories"
              onChange={changeHandler}
            />
          </div>
          <div className={classes.entry}>
            <Input label="Rating" id="rating" onChange={changeHandler} />
          </div>
          <div className={classes.entry}>
            <Input type="date" id="date" onChange={changeHandler} />
          </div>
          <Button variant="contained" type="submit" className={classes.button}>
            Add
          </Button>
        </Fragment>
      </div>
    </Grid>
  );
};

export default NewAdd;
