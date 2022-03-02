import { Container, Typography } from "@mui/material";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import classes from "./Sidebar.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import PersonIcon from "@mui/icons-material/Person";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import DashboardIcon from "@mui/icons-material/Dashboard";
const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarWrapper}>
        <Typography className={classes.title} variant="h5">
          <LocalFireDepartmentIcon className={classes.sidebarIcon} />
        </Typography>

        <NavLink
          to="/myhome/"
          className={classes.listItem}
          activeClassName={classes.active}
        >
          <DashboardIcon className={classes.sidebarIcon} />
          Dashboard
        </NavLink>

        <NavLink
          to="/myhome/addmeal"
          className={classes.listItem}
          activeClassName={classes.active}
        >
          <RestaurantMenuIcon className={classes.sidebarIcon} />
          Menu
        </NavLink>

        <div className={classes.listItem}>
          <FitnessCenterIcon className={classes.sidebarIcon} />
          Fitness Goals
        </div>

        <div className={classes.listItem}>
          <PersonIcon className={classes.sidebarIcon} />
          User Settings
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
