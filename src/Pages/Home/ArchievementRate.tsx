import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";

export default function ArchievementRate() {
  const today = dayjs().format("MM/DD");
  return (
    <Box
      sx={{
        backgroundImage: 'url("d01.jpg")',
        position: "relative",
        height: "312px",
      }}
    >
      <Box
        component="img"
        src="/circle-icon.png"
        sx={{
          position: "absolute",
          left: "50%",
          top: "20%",
          transform: "translate(-50%, 0)",
        }}
      />
      <Stack
        direction="row"
        sx={{
          position: "absolute",
          left: "50%",
          top: "40%",
          transform: "translate(-50%, 0)",
        }}
        alignItems="center"
        spacing={1}
      >
        <Typography
          sx={{
            fontSize: "18px",
          }}
          color="white"
        >
          {today}
        </Typography>
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: "400",
            color: "white",
          }}
        >
          75%
        </Typography>
      </Stack>
    </Box>
  );
}
