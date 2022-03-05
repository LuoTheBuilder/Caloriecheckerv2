import React from "react";
import Callout from "./Callout";
import classes from "./Callouts.module.css";

const Callouts = ({ data, meals, target }) => {
  const totalCalories = data.reduce((a, v) => (a = a + v.cals), 0);
  const amount = meals.length;
  const percent = ((data[0].cals / target) * 100).toFixed(1);
  const AverageDailyIntake = (totalCalories / 7).toFixed(0);
  return (
    <div className={classes.calloutbox}>
      <Callout
        title="Today's Total Calories"
        value={data[0].cals}
        smallText="cals"
      />
      <Callout title="% to Daily Goal" value={`${percent}`} smallText="%" />
      <Callout title="Total Meals" value={amount} />

      <Callout
        title="Average daily intake"
        value={`${AverageDailyIntake}`}
        smallText="cals"
      />
    </div>
  );
};

export default Callouts;
