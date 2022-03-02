import { Card } from "@mui/material";
import React from "react";
import classes from "./Callout.module.css";

const Callout = ({ title, value }) => {
  return (
    <div className={classes.cardHolder}>
      <Card className={classes.card}>
        <div className={classes.cardTop}>
          <h2>{title}</h2>
        </div>
        <div className={classes.cardBottom}>
          <div className={classes.cardStat}>
            <p>{value}</p>
            <h5></h5>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Callout;
