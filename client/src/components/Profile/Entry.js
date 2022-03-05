import { Container } from "@mui/material";
import React from "react";
import classes from "./Entry.module.css";
import Input from "../UI/Input";

const Entry = ({ title, value, onChange }) => {
  return (
    <Container>
      <div className={classes.mainWrapper}>
        <div className={classes.leftWrapper}>
          <h2>{title}:</h2>
        </div>

        <div className={classes.rightWrapper}>
          <Input title={title} value={value} onChange={onChange} />
        </div>
        <div className={classes.saveWrapper}></div>
      </div>
    </Container>
  );
};

export default Entry;
