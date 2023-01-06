import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Topbar from "./Topbar";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <Box className="page-container">
      <Topbar />
      <ScrollToTop />
      <Box
        className="page-content"
        marginTop={{ xs: "56px", md: "64px" }}
        sx={{ background: "white" }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
