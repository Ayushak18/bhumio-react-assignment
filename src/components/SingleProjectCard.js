import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/system";

export default function SingleProjectCard(props) {
  return (
    <Card sx={{ my: 5, mx: 5 }}>
      <CardContent>
        <Box sx={{ display: "flex", p: 3 }}>
          <Box sx={{ mr: 10 }}>
            <p>Project ID</p>
            <p>Project Name</p>
            <p>Budget</p>
            <p>End Date</p>
          </Box>
          <Box>
            <p>: {props.singleProject.id}</p>
            <p>: {props.singleProject.name}</p>
            <p>
              :{" "}
              {"₹ " +
                props.singleProject.budget
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
            <p>: {props.singleProject.end_date}</p>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
