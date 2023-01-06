import { Box, Button, Grid, Stack, Typography } from "@mui/material";

const DiaryBox = () => (
  <Grid
    item
    xs={12}
    md={5.5}
    lg={2.8}
    width="260px"
    height="231px"
    border="1px solid #707070"
    p={2}
    mb={{ xs: "10px" }}
  >
    <Stack
      sx={{
        fontSize: "18px",
        lineHeight: "22px",
      }}
    >
      <Typography>2021.05.21</Typography>
      <Typography>23:25</Typography>
      <Typography>
        私の日記の記録が一部表示されます。
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
      </Typography>
    </Stack>
  </Grid>
);

export default function MyDiary() {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "22px",
          fontWeight: "400",
          lineHeight: "27px",
          marginBottom: "20px",
        }}
      >
        MY DIARY
      </Typography>
      <Grid container display="flex" justifyContent="space-between">
        {Array.from(Array(8).keys()).map((_, index) => (
          <DiaryBox key={index} />
        ))}
        <Grid item xs={12} mt={2} justifyContent="center" display="flex">
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
            自分の日記をもっと見る
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
