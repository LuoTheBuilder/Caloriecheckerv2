import React from "react";
import classes from "./Card.module.css";
import { Card } from "@mui/material";

const Cardm = ({ children, title }) => {
  return (
    <div className={classes.cardHolder}>
      <Card className={classes.card}>
        <div className={classes.cardTop}>
          <h2>{title}</h2>
        </div>
        <div className={classes.cardBottom}>{children}</div>
      </Card>
    </div>
  );
};

export default Cardm;
