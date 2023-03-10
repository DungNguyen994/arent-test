import { Close } from "@mui/icons-material";
import { Box, Drawer, IconButton, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import { MenuItemList } from "../../contanst";

interface MenuItemProps {
  label: string;
  path?: string;
}
const MenuItem = ({ label, path }: MenuItemProps) => {
  const navigate = useNavigate();
  return (
    <Box
      className="menu-item-container"
      p={3}
      sx={{
        minWidth: "150px",
      }}
      onClick={() => path && navigate(path)}
    >
      {label}
    </Box>
  );
};

interface Props {
  open: boolean;
  closeSidebar: () => void;
}
export default function DrawerSideBar({ open, closeSidebar }: Props) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={closeSidebar}
      PaperProps={{
        sx: {
          backgroundColor: "#777777",
        },
      }}
    >
      <Stack direction="row-reverse" sx={{ background: "white" }}>
        <IconButton
          sx={{
            background: "#414141",
            borderRadius: 0,
          }}
          onClick={closeSidebar}
        >
          <Close sx={{ color: "#FF963C" }} fontSize="large" />
        </IconButton>
      </Stack>
      {MenuItemList.map((item, index) => (
        <MenuItem {...item} key={index} />
      ))}
    </Drawer>
  );
}
