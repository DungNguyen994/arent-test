import { Grid, Box, Typography } from "@mui/material";

interface Props {
  bgImg: string;
  text: string;
}

export default function MealItem({ bgImg, text }: Props) {
  return (
    <Grid
      item
      xs={6}
      md={3}
      sx={{
        backgroundImage: `url(${bgImg})`,
        position: "relative",
        height: { xs: "100px", md: "234px" },
        width: { xs: "100px", md: "234px" },
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
          bottom: 0,
          width: "120px",
          height: "32px",
          background: "#FFCC21",
          color: "white",
        }}
      >
        <Typography
          sx={{
            position: "absolute",
            left: "8px",
            bottom: "2px",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Grid>
  );
}
