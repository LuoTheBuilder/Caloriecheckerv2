import React, { Fragment } from "react";
import classes from "./LayoutTest.module.css";

const layoutTest = () => {
  return (
    <Fragment>
      <div className={classes.menu}>sdfsdf</div>
      <div className={classes.container}>
        <div className={classes.sidebar}>asd</div>
        <div className={classes.main}>asdad</div>
      </div>
    </Fragment>
  );
};

export default layoutTest;
