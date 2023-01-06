import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
interface ItemProps {
  name: string;
  kcal: number;
  time: number;
}
const Item = ({ name, kcal, time }: ItemProps) => (
  <Stack direction="row" justifyContent="space-between">
    <Stack>
      <Typography
        sx={{
          fontSize: "15px",
          lineHeight: "22px",
          color: "white",
        }}
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
  const exercises = [
    {
      name: "家事全般（立位・軽い）",
      kcal: 26,
      time: 10,
    },
    {
      name: "家事全般（立位・軽い）",
      kcal: 26,
      time: 10,
    },
    {
      name: "家事全般（立位・軽い）",
      kcal: 26,
      time: 10,
    },
    {
      name: "家事全般（立位・軽い）",
      kcal: 26,
      time: 10,
    },
    {
      name: "家事全般（立位・軽い）",
      kcal: 26,
      time: 10,
    },
    {
      name: "家事全般（立位・軽い）",
      kcal: 26,
      time: 10,
    },
    {
      name: "家事全般（立位・軽い）",
      kcal: 26,
      time: 10,
    },
  ];
  const today = dayjs().format("YYYY.MM.DD");
  return (
    <Box sx={{ background: "#414141" }} p={3} height="264px">
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
      <Grid container spacing={2}>
        {exercises.map((e, index) => (
          <Grid item xs={6} key={index}>
            <Item {...e} />
            <hr className="divider" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
