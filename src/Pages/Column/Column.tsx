import { Button, Stack } from "@mui/material";
import ColumnList from "./ColumnList";
import RecommendSection from "./RecommendSection";

export default function Column() {
  return (
    <Stack
      p={{ md: "0 15%" }}
      mt={15}
      mb={5}
      spacing={10}
      justifyContent="center"
      alignItems="center"
    >
      <RecommendSection />
      <ColumnList />
      <Button
        sx={{
          background:
            "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",
          p: "4px 30px",
          margin: "8px auto",
          display: "block",
          height: "56px",
          width: "310px",
        }}
      >
        コラムをもっと見る
      </Button>
    </Stack>
  );
}
