import { Box, Stack, Typography } from "@mui/material";
import React from "react";

interface ItemProps {
  bgImg: string;
  headerText: string;
  btnText: string;
}
const Item = ({ bgImg, headerText, btnText }: ItemProps) => (
  <Box
    sx={{
      height: "288px",
      width: "288px",
      background: "#FFCC21",
      position: "relative",
    }}
  >
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        position: "absolute",
        height: "80%",
        width: "80%",
        top: "10%",
        left: "10%",
      }}
    >
      <Stack
        sx={{
          position: "absolute",
          left: "50%",
          top: "40%",
          width: "100%",
          transform: "translate(-50%, 0)",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "25px",
            lineHeight: "30px",
            color: "#FFCC21",
            textAlign: "center",
            textTransform: "uppercase",
            marginBottom: "15px",
          }}
        >
          {headerText}
        </Typography>
        <Box
          sx={{
            cursor: "pointer",
            background: "#FF963C",
            padding: "1px 0px",
            textAlign: "center",
            color: "white",
            width: "70%",
            margin: "0 auto",
            fontSize: "14px",
          }}
        >
          {btnText}
        </Box>
      </Stack>
    </Box>
  </Box>
);

export default function Navigation() {
  const itemList = [
    {
      bgImg: "/Imagine/MyRecommend-1.jpg",
      headerText: "Body Record",
      btnText: "自分のカラダの記録",
    },
    {
      bgImg: "/Imagine/MyRecommend-2.jpg",
      headerText: "My exercise",
      btnText: "自分の運動の記録",
    },
    {
      bgImg: "/Imagine/MyRecommend-3.jpg",
      headerText: "my diary",
      btnText: "自分の日記",
    },
  ];
  return (
    <Stack direction="row" spacing={30}>
      {itemList.map((item, index) => (
        <Item {...item} key={index} />
      ))}
    </Stack>
  );
}
