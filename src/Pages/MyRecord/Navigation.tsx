import { Box, Stack } from "@mui/material";
import React from "react";

interface ItemProps {
  bgImg: string;
}
const Item = ({ bgImg }: ItemProps) => (
  <Box
    sx={{
      height: "288px",
      width: "288px",
      background: "FFCC21",
      position: "relative",
    }}
    p={1}
  >
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        position: "relative",
        backgroundSize: "cover",
      }}
    ></Box>
  </Box>
);

export default function Navigation() {
  const itemList = [{ bgImg: "Imagine/MyRecommend-1.jpg" }];
  return (
    <Stack direction="row">
      {itemList.map(({ bgImg }, index) => (
        <Item bgImg={bgImg} key={index} />
      ))}
    </Stack>
  );
}
