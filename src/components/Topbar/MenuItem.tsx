import {
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
} from "@mui/material";

interface Props {
  label: string;
  iconSrc: string;
  onClick: () => void;
  hasBadge?: boolean;
}
export default function MenuItem({ label, iconSrc, onClick, hasBadge }: Props) {
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
