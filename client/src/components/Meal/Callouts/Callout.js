import { Card } from "@mui/material";
import React from "react";
import classes from "./Callout.module.css";

const Callout = ({ title, value, smallText }) => {
  return (
    <div className={classes.cardHolder}>
      <Card className={classes.card}>
        <div className={classes.cardTop}>
          <h2>{title}</h2>
        </div>
        <div className={classes.cardBottom}>
          <div className={classes.cardStat}>
            <p>
              {value}
              <span>{smallText}</span>
            </p>
            <h5></h5>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Callout;
