import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMeals } from "../actions/meals";
import { getPrefs } from "../actions/prefs";
import { getUser } from "../actions/users";
import Sidebar from "../components/NavBar/Sidebar";
import MealMain from "../components/Meal/MealMain";
import classes from "./MyHome.module.css";
import PrivateRoute from "../Routing/PrivateRoute";
import Menu from "../components/Menu/Menu";
import Footer from "../components/UI/Footer";

import Profile from "./Profile";

const MyHome = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  //Pulls in all of the important dispatches at the root of private on each load. This reduces code repetition throughout.
  useEffect(() => {
    dispatch(getMeals(user._id));
    dispatch(getUser(user._id));
    dispatch(getPrefs(user._id));
  }, []);

  //Private routes stop the app from loading in the event that a sutiable token is not presented
  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <Sidebar />
      </div>
      <div className={classes.main}>
        <Redirect path="/myhome" to="/myhome/dash" />
        <PrivateRoute path="/myhome/dash" component={MealMain} exact />
        <PrivateRoute path="/myhome/addmeal" component={Menu} exact />
        <PrivateRoute path="/myhome/profile" component={Profile} exact />
        <Footer />
      </div>
    </div>
  );
};

export default MyHome;
