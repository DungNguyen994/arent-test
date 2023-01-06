import { Close } from "@mui/icons-material";
import { Box, Drawer, IconButton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.scss";

const MenuItemList = [
  { label: "自分の記録" },
  { label: "体重グラフ" },
  { label: "目標" },
  { label: "選択中のコース" },
  { label: "コラム一覧" },
  { label: "設定" },
];

interface MenuItemProps {
  label: string;
}
const MenuItem = ({ label }: MenuItemProps) => (
  <Box
    className="menu-item-container"
    p={3}
    sx={{
      minWidth: "150px",
    }}
  >
    {label}
  </Box>
);

interface Props {
  open: boolean;
  closeSidebar: () => void;
}
export default function DrawerSideBar({ open, closeSidebar }: Props) {
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
      {MenuItemList.map(({ label }, index) => (
        <MenuItem label={label} key={index} />
      ))}
    </Drawer>
  );
}
