import { Box, Stack, Typography } from "@mui/material";

interface Props {
  iconSrc: string;
  text: string;
}

export default function HexComponent({ iconSrc, text }: Props) {
  return (
    <Box
      sx={{
        backgroundImage: 'url("hex-background.png")',
        width: "134px",
        height: "116px",
      }}
    ></Box>
  );
}
