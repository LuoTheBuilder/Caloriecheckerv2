import classes from "./MealList.module.css";
import Meal from "./Meal";
import { Card } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import QuickAdd from "./QuickAdd";

const MealList = ({ meals, title, allowAdd }) => {
  const [quickAdd, setQuickAdd] = useState(false);

  const setAddHandler = () => {
    setQuickAdd((prevQuickAdd) => !prevQuickAdd);
  };
  return (
    <div className={classes.cardHolder}>
      <Card className={classes.card}>
        <div className={classes.cardTop}>
          <h2>{title}</h2>
          <div className={classes.quickAdd} onClick={setAddHandler}>
            <AddCircleOutlineIcon /> Quick Add
          </div>
        </div>
        <div className={classes.cardBottom}>
          {quickAdd && <QuickAdd setQuickAdd={setQuickAdd} />}
          <div className={classes.chartTitles}>
            <div className={classes.nameTitle}>
              <div className={classes.chartTitle}>Meal Name</div>
            </div>
            <div className={classes.calTitle}>
              <div className={classes.chartTitle}>Calories</div>
            </div>
            <div className={classes.calTitle}>
              <div className={classes.chartTitle}>Rating</div>
            </div>
            <div className={classes.calTitle}>
              <div className={classes.chartTitle}>Options</div>
            </div>
          </div>
          {meals.map((meal) => (
            <Meal
              key={meal._id}
              mealName={meal.mealName}
              date={meal.date}
              calories={meal.calories}
              id={meal._id}
              rating={meal.rating}
            />
          ))}
          <h5></h5>
        </div>
      </Card>
    </div>
  );
};

export default MealList;
{
}
