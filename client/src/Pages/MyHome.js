import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import Sidebar from "../components/NavBar/Sidebar";
import MealMain from "../components/Meal/MealMain";
import classes from "./MyHome.module.css";
import PrivateRoute from "../Routing/PrivateRoute";
import Menu from "../components/Menu/Menu";
import Profile from "./Profile";

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
        <Redirect path="/myhome" to="/myhome/dash" />
        <PrivateRoute path="/myhome/dash" component={MealMain} exact />
        <PrivateRoute path="/myhome/addmeal" component={Menu} exact />
        <PrivateRoute path="/myhome/profile" component={Profile} exact />
      </div>
    </div>
  );
};

export default MyHome;
