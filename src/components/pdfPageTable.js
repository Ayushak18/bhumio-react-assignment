import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import data from "../data/dummyData.json";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";

export default function PDFPageTable() {
  return (
    <TableContainer component={Paper}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          mt: 5,
          mr: 5,
        }}
      >
        <Button variant="contained">Generate PDF File</Button>
      </Box>
      <Table sx={{ width: "80%", ml: 40, mt: 5 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <h2>Project ID</h2>
            </TableCell>
            <TableCell>
              <h2>Project Name</h2>
            </TableCell>
            <TableCell>
              <h2>Budget</h2>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((singleProject) => (
            <TableRow
              key={singleProject.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {singleProject.id}
              </TableCell>
              <TableCell>{singleProject.name}</TableCell>
              <TableCell>{"₹ " + singleProject.budget}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
