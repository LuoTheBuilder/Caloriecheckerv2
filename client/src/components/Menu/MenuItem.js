import React from "react";
import { useDispatch } from "react-redux";
import { deleteFromMenu } from "../../actions/Menu";
import classes from "./MenuItem.module.css";
import DeleteIcon from "@mui/icons-material/Delete";

const MenuItem = ({ id, name, calories, ing, rating }) => {
  const dispatch = useDispatch();
  const deleteHandler = (e) => {
    e.preventDefault();
    dispatch(deleteFromMenu(id));
  };
  return (
    <div className={classes.container}>
      <div className={classes.leftWrapper}>
        <div className={classes.topHalf}>
          <h3>{name}</h3>
        </div>
        <div className={classes.bottomHalf}>{ing}</div>
      </div>
      <div className={classes.middle1Wrapper}>
        {rating}
        <span>Stars</span>
      </div>
      <div className={classes.middle2Wrapper}>
        {calories}
        <span>cals</span>
      </div>
      <div className={classes.rightWrapper}>
        <DeleteIcon onClick={deleteHandler} />
      </div>
    </div>
  );
};

export default MenuItem;
