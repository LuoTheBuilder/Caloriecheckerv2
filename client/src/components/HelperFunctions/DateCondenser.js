import React from "react";

const MealCondenser = (days, meals) => {
  const day = new Date(Date.now() - 845e5 * days)
    .toISOString()
    .substring(0, 10);
  const daycals = meals
    .filter((meal) => meal.date === day)
    .reduce((a, v) => (a = a + v.calories), 0);
  return { date: day, cals: daycals };
};

const DateCondenser = (meals) => {
  const today = MealCondenser(0, meals);
  const daym1 = MealCondenser(1, meals);
  const daym2 = MealCondenser(2, meals);
  const daym3 = MealCondenser(3, meals);
  const daym4 = MealCondenser(4, meals);
  const daym5 = MealCondenser(5, meals);
  const daym6 = MealCondenser(6, meals);
  const array = [today, daym1, daym2, daym3, daym4, daym5, daym6];
  return { array };
};

export default DateCondenser;
