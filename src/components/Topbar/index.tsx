import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import MenuList from "./MenuList";
import MobileSideBar from "./MobileSideBar";
import "./index.scss";

export default function Topbar() {
  const location = useLocation();
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
    document.title = workItem + "-Health App";
  }, [workItem]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuId = "primary-search-account-menu-mobile";

  const navigate = useNavigate();

  const closeSidebar = () => setIsMobileMenuOpen(false);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="fixed"
      style={{ background: "#414141" }}
      sx={{ maxHeight: "64px", padding: { md: "0 10%" } }}
      className="menu-list"
    >
      <Toolbar>
        <Box component="img" src="/logo.png" alt="App Logo" />
        <Box sx={{ flexGrow: 1 }} />
        <MenuList />
        <Box sx={{ flexGrow: 0.2 }} />
        <Box>
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={() => setIsMobileMenuOpen((pre) => !pre)}
            color="inherit"
          >
            <MenuIcon sx={{ fontSize: "30px" }} />
          </IconButton>
        </Box>
      </Toolbar>
      <MobileSideBar open={isMobileMenuOpen} closeSidebar={closeSidebar} />
    </AppBar>
  );
}
