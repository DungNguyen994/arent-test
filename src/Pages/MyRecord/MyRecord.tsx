import { Stack, Box } from "@mui/material";
import { BodyGraph } from "../Home/BodyGraph";
import MyDiary from "./MyDiary";
import MyExercise from "./MyExercise";
import Navigation from "./Navigation";
import { useRef } from "react";

export type NavPath = "body" | "exercise" | "diary";
export default function MyRecord() {
  const bodyRef = useRef<null | HTMLDivElement>(null);
  const exerciseRef = useRef<null | HTMLDivElement>(null);
  const diaryRef = useRef<null | HTMLDivElement>(null);
  const onNavClick = (path: NavPath) => {
    if (path === "body" && bodyRef.current) bodyRef.current.scrollIntoView();
    else if (path === "exercise" && exerciseRef.current)
      exerciseRef.current.scrollIntoView();
    else if (path === "diary" && diaryRef.current)
      diaryRef.current.scrollIntoView();
  };
  return (
    <Stack p={{ md: "0 15%" }} mt={15} mb={5} spacing={10}>
      <Navigation onNavClick={onNavClick} />
      <Box ref={bodyRef} id="body-graph">
        <BodyGraph />
      </Box>
      <Box ref={exerciseRef} id="exercise">
        <MyExercise />
      </Box>
      <Box ref={diaryRef} id="diary">
        <MyDiary />
      </Box>
    </Stack>
  );
}
