import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { useHistory, Route, Switch } from "react-router-dom";
import Sidebar from "../components/NavBar/Sidebar";
import MealMain from "../components/Meal/MealMain";
import classes from "./MyHome.module.css";
import PrivateRoute from "../Routing/PrivateRoute";
import AddMeal from "../components/AddMeal/AddMeal";

const MyHome = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
  };

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.main}>
        <PrivateRoute path="/myhome/" component={MealMain} exact />
        <PrivateRoute path="/myhome/addmeal" component={AddMeal} exact />
      </div>
    </div>
  );
};

export default MyHome;
