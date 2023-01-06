import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return showTopBtn ? (
    <Box
      component="img"
      src="/Imagine/component_scroll.png"
      sx={{
        position: "fixed",
        top: "50%",
        right: { xs: "5px", lg: "50px" },
        cursor: "pointer",
      }}
      onClick={goToTop}
    />
  ) : null;
}
