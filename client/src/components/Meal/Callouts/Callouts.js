import React from "react";
import Callout from "./Callout";
import classes from "./Callouts.module.css";

const Callouts = ({ data }) => {
  const totalCalories = data.reduce((a, v) => (a = a + v.cals), 0);
  const amount = data.length;
  const percent = ((totalCalories / 17500) * 100).toFixed(1);
  const AverageDailyIntake = (totalCalories / 7).toFixed(0);
  return (
    <div className={classes.calloutbox}>
      <Callout title="Total Calories" value={totalCalories} />
      <Callout title="Total Meals" value={amount} />
      <Callout title="% to Goal" value={`${percent}%`} />
      <Callout
        title="Average daily intake"
        value={`${AverageDailyIntake}cals`}
      />
    </div>
  );
};

export default Callouts;
