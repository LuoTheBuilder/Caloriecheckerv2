import classes from "./MealList.module.css";
import Meal from "./Meal";
import { Card } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useState } from "react";
import QuickAdd from "./QuickAdd";

const MealList = ({ meals, title, expanded }) => {
  const [quickAdd, setQuickAdd] = useState(false);
  const [expand, setExpand] = useState(false);

  const setAddHandler = () => {
    setQuickAdd((prevQuickAdd) => !prevQuickAdd);
  };

  const expandHandler = () => {
    setExpand((prevExpand) => !prevExpand);
  };
  return (
    <div className={classes.cardHolder}>
      <Card className={classes.card}>
        <div className={classes.cardTop}>
          <h2>{title}</h2>
          {!expanded && (
            <div className={classes.quickAdd} onClick={setAddHandler}>
              <AddCircleOutlineIcon /> Quick Add
            </div>
          )}
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
          <div className={expand ? classes.mealListExp : classes.mealListDef}>
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
          </div>
        </div>
        {expanded && (
          <div className={classes.expandBar}>
            <p onClick={expandHandler}>{expand ? "Less" : "More"}</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default MealList;
{
}
