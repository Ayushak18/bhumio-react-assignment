import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/system";

export default function ProjectCard(props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <div>
        <Card sx={{ my: 5 }}>
          <CardContent
            sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
          >
            <Box sx={{ p: 5 }}>
              <p>Project ID</p>
              <p>Project Name</p>
              <p>Project Manager</p>
              <p>Start Date</p>
            </Box>
            <Box sx={{ p: 5 }}>
              <p>: {props.data.singleProject.id}</p>
              <p>: {props.data.singleProject.name}</p>
              <p>: {props.data.singleProject.manager}</p>
              <p>: {props.data.singleProject.start_date}</p>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ my: 5 }}>
          <CardContent
            sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
          >
            <Box sx={{ p: 5 }}>
              <p>Supplier</p>
              <p>Contact Person</p>
              <p>Phone</p>
              <p>Email</p>
            </Box>
            <Box sx={{ p: 5 }}>
              <p>: {props.data.singleProject.supplier}</p>
              <p>: {props.data.singleProject.supplier_contact}</p>
              <p>: {props.data.singleProject.phone}</p>
              <p>: {props.data.singleProject.email}</p>
            </Box>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card sx={{ my: 5 }}>
          <CardContent
            sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
          >
            <Box sx={{ p: 5 }}>
              <p>Site Address</p>
              <p>Railway Station</p>
              <p>Budget</p>
              <p>End Date</p>
            </Box>
            <Box sx={{ p: 5 }}>
              <p>: {props.data.singleProject.site}</p>
              <p>: {props.data.singleProject.railway_station}</p>
              <p>: {"₹ "+props.data.singleProject.budget}</p>
              <p>: {props.data.singleProject.end_date}</p>
            </Box>
          </CardContent>
        </Card>
        <Card sx={{ my: 5 }}>
          <CardContent
            sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
          >
            <Box sx={{ p: 5 }}>
              <p>Project Status</p>
            </Box>
            <Box
              sx={{
                p: 5,
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                height: "260px",
                width: "200px",
                textAlign: "center",
              }}
            >
              <p>: {props.data.singleProject.status}</p>
            </Box>
          </CardContent>
        </Card>
      </div>
    </Box>
  );
}
