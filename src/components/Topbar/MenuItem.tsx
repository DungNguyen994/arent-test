import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  label: string;
  iconSrc?: string;
  hasBadge?: boolean;
  path?: string;
}
export default function MenuItem({ label, iconSrc, hasBadge, path }: Props) {
  const navigate = useNavigate();
  const text = (
    <ListItemText
      primary={label}
      sx={{
        "&&MuiTypography-root": {
          fontSize: "16px",
        },
      }}
    />
  );
  const onClick = () => {
    if (path) navigate(path);
  };
  return (
    <Box className="menu-item-container" sx={{ minWidth: "150px" }}>
      <ListItemButton onClick={onClick} style={{ background: "transparent" }}>
        <ListItemIcon sx={{ minWidth: "45px" }}>
          <Box component="img" src={iconSrc}></Box>
        </ListItemIcon>
        {hasBadge ? (
          <Badge badgeContent={1} color="warning">
            {text}
          </Badge>
        ) : (
          text
        )}
      </ListItemButton>
    </Box>
  );
}
