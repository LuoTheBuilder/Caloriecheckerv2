import React, { Fragment, useState } from "react";
import Callout from "./Callout";
import { Button } from "@mui/material";
import classes from "./Callouts.module.css";

const Callouts = ({ data, meals, target }) => {
  const [expand, setExpand] = useState(false);
  const totalCalories = data.reduce((a, v) => (a = a + v.cals), 0);
  const amount = meals.length;
  const percent = ((data[0].cals / target) * 100).toFixed(1);
  const AverageDailyIntake = (totalCalories / 7).toFixed(0);

  const expandHandler = () => {
    setExpand((prevExpand) => !prevExpand);
  };
  return (
    <div className={classes.calloutbox}>
      <Callout
        title="Today's Total Calories"
        value={data[0].cals}
        smallText="cals"
      />
      <Callout title="% to Daily Goal" value={`${percent}`} smallText="%" />

      <Callout
        title="Total Meals"
        value={amount}
        className={!expand && classes.hide}
      />
      <Callout
        title="Average daily intake"
        value={`${AverageDailyIntake}`}
        smallText="cals"
        className={!expand && classes.hide}
      />

      <div onClick={expandHandler} className={classes.hideDesk}>
        {expand ? "Less" : "More"}
      </div>
    </div>
  );
};

export default Callouts;
