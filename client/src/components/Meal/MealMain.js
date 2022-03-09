import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Card } from "@mui/material";
import MealList from "./MealList";
import classes from "./MealMain.module.css";
import Callouts from "./Callouts/Callouts";
import Chart from "./Charts/Chart";
import DateCondenser from "../HelperFunctions/DateCondenser";

const MealMain = () => {
  const today = new Date(Date.now() - 360e5).toISOString().substring(0, 10);

  //useSelector pulls from the redux store that was dispatched in the home
  const prefs = useSelector((state) => state.prefs[0]);
  const meals = useSelector((state) => state.meals);

  //helperFunction
  const data = DateCondenser(meals);

  const startDate = new Date(Date.now() - 845e5 * 7)
    .toISOString()
    .substring(0, 10);

  const todayMeals = meals.filter((meal) => meal.date === today);
  const prevMeals = meals.filter(
    (meal) => meal.date < today && meal.date >= startDate
  );
  const calTotal = data.array.reduce((a, v) => (a = a + v.cals), 0);

  const array = [
    [
      { date: "Consumed", cals: calTotal },
      { date: "Allocation Left", cals: prefs?.target * 7 - calTotal },
    ],
  ];

  return (
    <Container className={classes.mainWrapper} maxWidth="xl">
      <Callouts target={prefs?.target} data={data.array} meals={meals} />
      <div className={classes.bottomWrapper}>
        <div className={classes.chartWrapper}>
          <Chart
            data={data.array}
            type="line"
            title="Your 7-Day Calorie Breakdown"
          />
          <MealList meals={prevMeals} title="Past Meals" expanded="false" />
        </div>
        <div className={classes.mealWrapper}>
          <MealList meals={todayMeals} title="Today's Meals" allowAdd="true" />
          <Chart data={array[0]} type="doughnut" title="Total to Goal" />
        </div>
      </div>
    </Container>
  );
};

export default MealMain;
