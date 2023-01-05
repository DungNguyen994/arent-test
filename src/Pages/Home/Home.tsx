import { Stack, Grid, Box } from "@mui/material";
import ArchievementRate from "./ArchievementRate";
import { BodyGraph } from "./BodyGraph";
import Category from "./Category";
export default function Home() {
  return (
    <Grid container sx={{ height: "312px" }}>
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
      <Grid item xs={12}>
        <Category />
      </Grid>
    </Grid>
  );
}
