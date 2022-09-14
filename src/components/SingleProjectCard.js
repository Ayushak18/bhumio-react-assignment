import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export default function SingleProjectCard() {
  return (
    <Card sx={{ my: 5, mx: 5 }}>
      <CardContent>
        <Box sx={{ display: "flex", p: 3 }}>
          <Box sx={{ mr: 10 }}>
            <p>Project ID</p>
            <p>Project Name</p>
            <p>Budget</p>
            <p>End Data</p>
          </Box>
          <Box>
            <p>: 123456789</p>
            <p>: Bridge Construction</p>
            <p>: 2000000</p>
            <p>: 12/06/2025</p>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
