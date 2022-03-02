import React from "react";
import { useDispatch } from "react-redux";
import classes from "./Meal.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteMeal } from "../../actions/meals";

const Meal = ({ mealName, calories, id, rating, date, setMealList }) => {
  const dispatch = useDispatch();

  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteMeal(id));
  };
  return (
    <div>
      <div className={classes.chartRow}>
        <div className={classes.nameRow}>
          <div className={classes.entry}>{mealName}</div>
        </div>
        <div className={classes.otherRow}>
          <div className={classes.entry}>{calories}</div>
        </div>
        <div className={classes.otherRow}>
          <div className={classes.entry}>{rating}</div>
        </div>
        <div className={classes.otherRow}>
          <div className={classes.entry}>
            <DeleteIcon className={classes.delete} onClick={deleteHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meal;
