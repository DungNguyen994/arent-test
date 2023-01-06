import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Topbar from "./Topbar";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Footer";

export default function Layout() {
  return (
    <Box>
      <Topbar />
      <ScrollToTop />
      <Box
        marginTop={{ xs: "56px", md: "64px" }}
        sx={{ background: "white", height: "fit-content" }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
