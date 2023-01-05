import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box } from "@mui/material";

export const options = {
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  maintainAspectRatio: false,
  scales: {
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
};

const labels = [
  "6 月",
  "7 月",
  "8 月",
  "9 月",
  "10 月",
  "11 月",
  "12 月",
  "1 月",
  "2 月",
  "3 月",
  "4 月",
  "5 月",
];

export function BodyGraph() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  const data = {
    labels,
    datasets: [
      {
        data: [
          5000, 4700, 3500, 4000, 3700, 3300, 3675, 3200, 3100, 3000, 2800,
          3300,
        ],
        borderColor: "#FFCC21",
        backgroundColor: "#FFCC21",
      },
      {
        data: [
          5000, 4500, 3700, 3500, 3000, 3100, 2700, 2500, 2000, 1000, 500, 0,
        ],
        borderColor: "#8FE9D0",
        backgroundColor: "#8FE9D0",
      },
    ],
  };

  return (
    <Box height="312px" width="100%">
      <Line
        options={options}
        data={data}
        redraw
        style={{ background: "#2E2E2E", width: "100%" }}
      />
    </Box>
  );
}
