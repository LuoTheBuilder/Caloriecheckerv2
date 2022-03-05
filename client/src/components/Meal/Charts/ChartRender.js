import React from "react";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

const ChartRender = ({ data, type }) => {
  Chart.register(...registerables);

  const state = {
    labels: [
      data[6]?.date,
      data[5]?.date,
      data[4]?.date,
      data[3]?.date,
      data[2]?.date,
      data[1]?.date === "Allocation Left" ? "Allocation Left" : "Yesterday",
      data[0]?.date === "Consumed" ? "Consumed" : "Today",
    ],
    datasets: [
      {
        label: "Calories",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
        backgroundColor: [
          "#019889",
          "#f99954",
          "#db194e",
          "#595959",
          "#dbdbdb",
        ],
        hoverBackgroundColor: [
          "#048679",
          "#e88f4e",
          "#bb1a46",
          "#494949",
          "#cacaca",
        ],
        data: [
          data[6]?.cals,
          data[5]?.cals,
          data[4]?.cals,
          data[3]?.cals,
          data[2]?.cals,
          data[1]?.cals,
          data[0]?.cals,
        ],
      },
    ],
  };
  return (
    <div>
      {type === "line" && (
        <Line
          data={state}
          options={{
            title: {
              display: false,
            },
            legend: {
              display: false,
              position: "top",
            },
          }}
        />
      )}
      {type === "doughnut" && (
        <Doughnut
          data={state}
          options={{
            title: {
              display: false,
            },
            legend: {
              display: false,
              position: "none",
            },
          }}
        />
      )}
    </div>
  );
};

export default ChartRender;
