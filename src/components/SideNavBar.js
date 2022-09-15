import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import HomeIcon from "@mui/icons-material/Home";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { Link } from "react-router-dom";

const drawerWidth = 240;

export default function SideNavBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <Link to="/dashboard">
            <ListItem key="Dashboard" disablePadding>
              <ListItemButton>
                <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/report/pdf-report">
            <ListItem key="PDF Viewer" disablePadding>
              <ListItemButton>
                <ListItemIcon>{<PictureAsPdfIcon />}</ListItemIcon>
                <ListItemText primary="PDF Viewer" />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/report/projectbudgetplot">
            <ListItem key="Chart" disablePadding>
              <ListItemButton>
                <ListItemIcon>{<ShowChartIcon />}</ListItemIcon>
                <ListItemText primary="Chart" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </Box>
  );
}
