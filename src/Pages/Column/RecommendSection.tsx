import { Box, Divider, Grid, Typography } from "@mui/material";
import { recommendItems } from "../../contanst";

interface ItemProps {
  header: string;
  text: string;
}

const RecommendItem = ({ header, text }: ItemProps) => (
  <Box
    p={2}
    sx={{
      background: "#2E2E2E",
      width: { xs: "130px", lg: "216px" },
      height: { xs: "100px", lg: "144px" },
      textAlign: "center",
      cursor: "pointer",
    }}
  >
    <Typography
      sx={{
        color: "#FFCC21",
        fontSize: { xs: "15px", lg: "22px" },
        fontWeight: "400",
        lineHeight: "27px",
        mb: "10px",
        mt: "10px",
      }}
    >
      {header.toLocaleUpperCase()}
    </Typography>
    <Divider
      sx={{ background: "white", width: "30%", margin: "auto", mb: "10px" }}
    />
    <Typography
      sx={{
        color: "white",
        fontSize: "18px",
        fontWeight: "300",
        lineHeight: "26px",
      }}
    >
      {text}
    </Typography>
  </Box>
);

export default function RecommendSection() {
  return (
    <Grid container justifyContent="center" spacing={{ xs: 2 }}>
      {recommendItems.map((item, index) => (
        <Grid item xs={5} lg={3}>
          <RecommendItem {...item} key={index} />
        </Grid>
      ))}
    </Grid>
  );
}
