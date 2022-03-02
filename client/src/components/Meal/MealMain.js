import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card } from "@mui/material";
import { getMeals } from "../../actions/meals";
import MealList from "./MealList";
import classes from "./MealMain.module.css";
import Callouts from "./Callouts/Callouts";
import Chart from "./Charts/Chart";
import DateCondenser from "../HelperFunctions/DateCondenser";

const MealMain = () => {
  const dispatch = useDispatch();
  const today = new Date(Date.now()).toISOString().substring(0, 10);
  const meals = useSelector((state) => state.meals);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
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
      { date: "consumed", cals: calTotal },
      { date: "Allocation Left", cals: 17000 - calTotal },
    ],
  ];

  useEffect(() => {
    dispatch(getMeals(user._id));
  }, [useSelector]);

  return (
    <Container className={classes.mainWrapper} maxWidth="xl">
      <Callouts data={data.array} />
      <div className={classes.bottomWrapper}>
        <div className={classes.chartWrapper}>
          <Chart
            data={data.array}
            type="line"
            title="Your 7-Day Calorie Breakdown"
          />
          <MealList meals={prevMeals} title="Past Meals" allowAdd="false" />
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
