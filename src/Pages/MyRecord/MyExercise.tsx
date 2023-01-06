import { Box, Grid, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import exercises from "./exercises-mock.json";
interface ItemProps {
  name: string;
  kcal: number;
  time: number;
}
const Item = ({ name, kcal, time }: ItemProps) => (
  <Stack
    direction="row"
    justifyContent="space-between"
    sx={{
      borderBottom: "1px solid #777777",
      mr: "50px",
    }}
  >
    <Stack spacing={1}>
      <Typography
        sx={{
          fontSize: "15px",
          lineHeight: "22px",
          color: "white",
        }}
        component="li"
      >
        {name}
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          lineHeight: "18px",
          color: "#FFCC21",
        }}
      >
        {kcal}kcal
      </Typography>
    </Stack>
    <Typography
      sx={{
        color: "#FFCC21",
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "22px",
      }}
    >
      {time} min
    </Typography>
  </Stack>
);

export default function MyExercise() {
  const today = dayjs().format("YYYY.MM.DD");
  return (
    <Box sx={{ background: "#414141" }} p={3}>
      <Stack direction="row" mb={2}>
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: "400",
            lineHeight: "18px",
            color: "white",
            width: "96px",
          }}
        >
          MY EXERCISE
        </Typography>
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: "400",
            lineHeight: "27px",
            color: "white",
          }}
        >
          {today}
        </Typography>
      </Stack>
      <Grid
        container
        height="230px"
        sx={{
          overflow: "auto",
          mr: "40px",
        }}
        className="custom-scrollbar"
        component="ul"
      >
        {exercises.map((e, index) => (
          <Grid item xs={6} key={index}>
            <Item {...e} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
