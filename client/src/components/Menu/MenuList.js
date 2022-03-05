import React, { useState, useEffect } from "react";
import { getMenu } from "../../actions/Menu";
import { useDispatch, useSelector } from "react-redux";
import Cardm from "../UI/Card";
import classes from "./MenuList.module.css";
import MenuItem from "./MenuItem";

const MenuList = ({ user }) => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(getMenu(user._id));
  }, []);

  return (
    <div>
      <Cardm title="Your Menu">
        {menu.map((item) => (
          <MenuItem
            key={item._id}
            id={item._id}
            name={item.menuItem}
            calories={item.calories}
            ing={item.ingredients}
            rating={item.rating}
          />
        ))}
      </Cardm>
    </div>
  );
};

export default MenuList;
