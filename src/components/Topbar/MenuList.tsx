import { Stack } from "@mui/material";
import { MENU_LIST } from "../../contanst";
import MenuItem from "./MenuItem";

export default function MenuList() {
  return (
    <Stack
      direction="row"
      sx={{ display: { xs: "none", lg: "flex" } }}
      spacing={3}
    >
      {MENU_LIST.map(({ label, iconSrc, hasBadge }, key) => (
        <MenuItem
          key={key}
          label={label}
          iconSrc={iconSrc}
          onClick={() => {}}
          hasBadge={hasBadge}
        />
      ))}
    </Stack>
  );
}
