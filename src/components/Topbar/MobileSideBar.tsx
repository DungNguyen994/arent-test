import { Box, Collapse, List } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import "./index.scss";

interface Props {
  open: boolean;
  closeSidebar: () => void;
}

export default function MobileSideBar({ open, closeSidebar }: Props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);
  useEffect(() => {
    setSelected(location.pathname);
  }, [location.pathname]);

  const onMenuClick = (path: string) => {
    navigate(path);
    setSelected(path);
  };
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Box className="mobile-sidebar" width={{ md: "20%", xl: "10%" }}>
        <Stack
          sx={{
            justifyContent: "space-between",
            height: "90%",
          }}
        >
          <List style={{ paddingTop: 0 }}>
            {/* <MenuItem
              text="Home"
              onClick={() => onMenuClick(ROUTES.HOME)}
              selected={selected === ROUTES.HOME}
            /> */}
          </List>
        </Stack>
      </Box>
    </Collapse>
  );
}
