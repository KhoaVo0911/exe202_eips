import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import EventIcon from "@mui/icons-material/Event";
import InventoryIcon from "@mui/icons-material/Inventory";
import "./sidebar.scss";

export default function Sidebar({ setActiveComponent }) {
  const icons = [
    AttachMoneyIcon,
    InventoryIcon,
    EventIcon,
    DraftsIcon,
    SendIcon,
  ];
  const menuItems = [
    { text: "Thống kê doanh thu", component: "SalesOverview" },
    { text: "Tổng đơn hàng", component: "InventoryManagement" },
    { text: "Sự kiện", component: "EventsManagement" },
  ];

  const DrawerList = (
    <Box
      sx={{
        width: 300,
        background: "#1e2d48",
        color: "white",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "none",
      }}
      role="presentation"
    >
      <div
        className="nav-logo flex justify-center p-6"
        style={{ width: "100%" }}
      >
        <h1 className="text-xl font-bold">Dashboard</h1>
      </div>

      <List sx={{ flexGrow: 1 }}>
        {menuItems.map(({ text, component }, index) => {
          const IconComponent = icons[index % icons.length];
          return (
            <ListItem key={text} disablePadding>
              <ListItemButton
                onClick={() => setActiveComponent(component)}
                sx={{
                  "&:hover": {
                    backgroundColor: "#2c394f",
                    "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                      color: "white",
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ color: "white" }}>
                  <IconComponent />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      <div className="flex justify-between text-end my-5 p-2">
        <div className="flex gap-3 justify-center items-center">
          <AccountCircleIcon sx={{ fontSize: 40 }} />
          <h1 className="">Admin</h1>
        </div>

        <MoreHorizIcon sx={{ fontSize: 40 }} />
      </div>
    </Box>
  );

  return (
    <Box
      sx={{
        "&:hover": {
          backgroundColor: "#1e293b",
        },
        transition: "background-color 0.3s",
      }}
    >
      <Drawer
        variant="permanent"
        sx={{
          width: 300,
          flexShrink: 0,
        }}
      >
        {DrawerList}
      </Drawer>
    </Box>
  );
}
