import { Button, Grid } from "@mui/material";
import ArchievementRate from "./ArchievementRate";
import { BodyGraph } from "./BodyGraph";
import Category from "./Category";
import MealHistory from "./MealHistory";

export default function Home() {
  return (
    <Grid container mb={5}>
      <Grid item xs={12} md={4}>
        <ArchievementRate />
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          background: "#2E2E2E",
          padding: { xs: 0, lg: "0 60px 0 30px" },
        }}
      >
        <BodyGraph />
      </Grid>
      <Grid item xs={12} mt={2} p="6px 15%">
        <Category />
      </Grid>
      <Grid item xs={12} mt={2} p="6px 15%">
        <MealHistory />
      </Grid>
      <Grid item xs={12} mt={2} p="6px 15%">
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
          記録をもっと見る
        </Button>
      </Grid>
    </Grid>
  );
}
