import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import DrawerSideBar from "./DrawerSideBar";
import MenuList from "./MenuList";
import "./index.scss";

export default function Topbar() {
  const location = useLocation();
  const navigate = useNavigate();
  let workItem: string;
  switch (location.pathname) {
    case ROUTES.HOME:
      workItem = "Home";
      break;
    default:
      workItem = "Home";
  }
  if (location.pathname.includes("/edit-member")) {
    workItem = "Edit Member";
  }
  if (location.pathname.includes("/edit-product")) {
    workItem = "Edit Product";
  }

  useEffect(() => {
    document.title = workItem + "-Healthy";
  }, [workItem]);

  const [openDrawer, setOpenDrawer] = useState(false);

  const closeSidebar = () => setOpenDrawer(false);

  return (
    <AppBar
      position="fixed"
      style={{ background: "#414141" }}
      sx={{ maxHeight: "64px", padding: { md: "0 15%" } }}
      className="menu-list"
    >
      <Toolbar>
        <Box
          component="img"
          src="/Imagine/logo.png"
          alt="App Logo"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate(ROUTES.HOME)}
        />
        <Box sx={{ flexGrow: 1 }} />
        <MenuList />
        <Box sx={{ flexGrow: 0.2 }} />
        <Box>
          <IconButton
            aria-label="show more"
            aria-haspopup="true"
            onClick={() => setOpenDrawer((pre) => !pre)}
            color="inherit"
          >
            <MenuIcon sx={{ fontSize: "30px" }} />
          </IconButton>
        </Box>
      </Toolbar>
      <DrawerSideBar open={openDrawer} closeSidebar={closeSidebar} />
    </AppBar>
  );
}
