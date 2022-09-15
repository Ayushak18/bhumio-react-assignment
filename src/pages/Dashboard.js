import "../styles/dashboard.css";
import SideNavBar from "../components/SideNavBar";
import SingleProjectCard from "../components/SingleProjectCard";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import data from "../data/dummyData.json";

function Dashboard() {
  return (
    <>
      <SideNavBar />
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 5, mr: 10 }}>
        <Button variant="contained">Create New Project</Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          ml: 40,
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {data.map((singleProject, index) => {
          return (
            <Link
              key={index}
              to={`/project/${singleProject.id}`}
              state={{ singleProject }}
            >
              <SingleProjectCard singleProject={singleProject} />
            </Link>
          );
        })}
      </Box>
    </>
  );
}

export default Dashboard;
