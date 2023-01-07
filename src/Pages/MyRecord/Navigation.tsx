import { Box, Stack, Typography } from "@mui/material";
import { NavPath } from "./MyRecord";
import { navList } from "../../contanst";

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
        background: "grey",
        position: "absolute",
        height: "80%",
        width: "80%",
        top: "10%",
        left: "10%",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          height: "100%",
          width: "100%",
          mixBlendMode: "luminosity",
          opacity: 0.25,
        }}
      />
    </Box>
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
);

interface Props {
  onNavClick: (path: NavPath) => void;
}

export default function Navigation({ onNavClick }: Props) {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={{ xs: 2, lg: 30 }}
      alignItems="center"
      justifyContent="space-evenly"
    >
      {navList.map((item, index) => (
        <Item {...item} key={index} onNavClick={onNavClick} />
      ))}
    </Stack>
  );
}
