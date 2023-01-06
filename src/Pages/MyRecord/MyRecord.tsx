import { Stack } from "@mui/material";
import Navigation from "./Navigation";
import { BodyGraph } from "../Home/BodyGraph";
import MyExercise from "./MyExercise";

export default function MyRecord() {
  return (
    <Stack p="0 15%" mt={15} spacing={10}>
      <Navigation />
      <BodyGraph />
      <MyExercise />
    </Stack>
  );
}
