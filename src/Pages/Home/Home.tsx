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
      <Grid
        item
        xs={12}
        mt={2}
        p="6px 15%"
        display="flex"
        justifyContent="center"
      >
        <Button className="btn-main">記録をもっと見る</Button>
      </Grid>
    </Grid>
  );
}
