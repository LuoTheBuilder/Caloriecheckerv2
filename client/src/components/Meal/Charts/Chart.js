import React from "react";
import { Card } from "@mui/material";
import classes from "./Chart.module.css";
import ChartRender from "./ChartRender";
import DateCondenser from "../../HelperFunctions/DateCondenser";

const Chart = ({ data, type, title }) => {
  return (
    <div className={classes.cardHolder}>
      <Card className={classes.card}>
        <div className={classes.cardTop}>
          <h2>{title}</h2>
        </div>
        <div className={classes.cardBottom}>
          <ChartRender data={data} type={type} />
        </div>
      </Card>
    </div>
  );
};

export default Chart;
