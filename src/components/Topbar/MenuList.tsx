import { Stack } from "@mui/material";
import { MENU_LIST } from "../../contanst";
import MenuItem from "./MenuItem";

interface Props {
  direction?: "row" | "column";
}
export default function MenuList({ direction = "row" }: Props) {
  return (
    <Stack
      direction={direction}
      sx={{ display: { xs: "none", lg: "flex" } }}
      spacing={3}
    >
      {MENU_LIST.map(({ label, iconSrc, hasBadge, path }, key) => (
        <MenuItem
          key={key}
          label={label}
          iconSrc={iconSrc}
          hasBadge={hasBadge}
          path={path}
        />
      ))}
    </Stack>
  );
}
