import React, { useState } from "react";
import classes from "./Menu.module.css";
import { Container } from "@mui/material";
import AddMeal from "./AddMeal";
import MenuList from "./MenuList";
const Menu = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  return (
    <Container maxWidth="xl">
      <div className={classes.mainWrapper}>
        <div className={classes.leftWrapper}>
          <MenuList user={user} />
        </div>
        <div className={classes.rightWrapper}>
          <AddMeal user={user} />
        </div>
      </div>
    </Container>
  );
};

export default Menu;
