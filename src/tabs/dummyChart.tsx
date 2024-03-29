import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const DummyChart: React.FC = () => {
  const options = React.useMemo(
    () => ({
      responsive: true,
      plugins: {
        legend: {
          position: "bottom" as const,
        },
        title: {
          display: true,
          text: "Income Chart",
        },
      },
    }),
    []
  );

  const labels = React.useMemo(
    () => ["January", "February", "March", "April", "May", "June", "July"],
    []
  );

  const data = React.useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: "Last Year",
          data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "Current Year",
          data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: "rgba(53, 162, 235, 0.5)",
        },
      ],
    }),
    []
  );

  return <Line options={options} data={data} />;
};

export default DummyChart;
