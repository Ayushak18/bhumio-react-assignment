import { Box } from "@mui/system";
import dummyData from "../data/dummyData.json";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart() {
  const data = {
    labels: dummyData.map((singleProject) => singleProject.id),
    datasets: [
      {
        label: "Budget in Rupees",
        data: dummyData.map((singleProject) => singleProject.budget),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          ml: 35,
          mt: 10,
          mr: 10,
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <Line data={data} />
      </Box>
    </>
  );
}

export default LineChart;
