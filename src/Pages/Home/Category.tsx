import { Stack } from "@mui/material";
import HexComponent from "../../components/HexComponent";

export default function Category() {
  return (
    <Stack direction="row" spacing={2}>
      <HexComponent text="Morning" iconSrc="/knife-fork-icon.png" />
    </Stack>
  );
}
