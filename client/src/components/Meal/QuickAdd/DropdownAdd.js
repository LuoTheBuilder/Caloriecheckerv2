import { Button, Select } from "@mui/material";
import React from "react";
import classes from "./DropdownAdd.module.css";

const DropdownAdd = ({}) => {
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.leftWrapper}>
        <Select></Select>
      </div>
      <div className={classes.rightWrapper}></div>
    </div>
  );
};

export default DropdownAdd;
