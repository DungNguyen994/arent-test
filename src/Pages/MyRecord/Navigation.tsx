import { Box, Stack, Typography } from "@mui/material";
import { NavPath } from "./MyRecord";

interface ItemProps {
  bgImg: string;
  headerText: string;
  btnText: string;
  path: NavPath;
  onNavClick: (path: NavPath) => void;
}
const Item = ({ bgImg, headerText, btnText, path, onNavClick }: ItemProps) => (
  <Box
    sx={{
      height: "288px",
      width: "288px",
      background: "#FFCC21",
      position: "relative",
      cursor: "pointer",
    }}
    onClick={() => onNavClick(path)}
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

interface Props {
  onNavClick: (path: NavPath) => void;
}

export default function Navigation({ onNavClick }: Props) {
  const itemList = [
    {
      bgImg: "/Imagine/MyRecommend-1.jpg",
      headerText: "Body Record",
      btnText: "自分のカラダの記録",
      path: "body" as NavPath,
    },
    {
      bgImg: "/Imagine/MyRecommend-2.jpg",
      headerText: "My exercise",
      btnText: "自分の運動の記録",
      path: "exercise" as NavPath,
    },
    {
      bgImg: "/Imagine/MyRecommend-3.jpg",
      headerText: "my diary",
      btnText: "自分の日記",
      path: "diary" as NavPath,
    },
  ];
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 2, lg: 30 }}
      alignItems="center"
      justifyContent="space-evenly"
    >
      {itemList.map((item, index) => (
        <Item {...item} key={index} onNavClick={onNavClick} />
      ))}
    </Stack>
  );
}
