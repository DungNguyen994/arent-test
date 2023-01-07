import { Box, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import { ProcessCircle } from "../../components/ProgressCircle";

export default function ArchievementRate() {
  const today = dayjs().format("MM/DD");
  return (
    <Box
      sx={{
        backgroundImage: 'url("Imagine/main_photo.png")',
        position: "relative",
        height: "312px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: "48%",
          top: "15%",
          transform: "translate(-50%, 0)",
        }}
      >
        <Box component={ProcessCircle} colour="white" percentage={75} />
      </Box>
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
