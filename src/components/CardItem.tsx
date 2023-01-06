import { Grid, Box, Typography, Stack } from "@mui/material";

interface Props {
  bgImg: string;
  text: string;
  height?: string;
  content?: string;
  footer?: string;
}

export default function CardItem({
  bgImg,
  text,
  height = "234px",
  content,
  footer,
}: Props) {
  return (
    <Grid item xs={12} md={3} mb={3}>
      <Stack spacing={1}>
        <Box
          sx={{
            backgroundImage: `url(${bgImg})`,
            position: "relative",
            height: { height },
            width: { md: "234px" },
            backgroundSize: "cover",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: 0,
              bottom: 0,
              minWidth: "130px",
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
                fontSize: "15px",
                lineHeight: "22px",
              }}
            >
              {text}
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            width: "234px",
          }}
        >
          {content}
        </Typography>
        {footer && (
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "300",
              color: "#FF963C",
              mt: "0 !important",
            }}
          >
            {footer}
          </Typography>
        )}
      </Stack>
    </Grid>
  );
}
