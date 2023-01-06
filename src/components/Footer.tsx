import { Stack, Box } from "@mui/material";
import { Link } from "react-router-dom";

interface LinkProps {
  text: string;
}

const FooterLink = ({ text }: LinkProps) => {
  return (
    <Box
      color="white"
      component={Link}
      sx={{
        textDecoration: "none",
      }}
    >
      {text}
    </Box>
  );
};

export default function Footer() {
  const footerItemList = [
    "会員登録",
    "運営会社",
    "利用規約",
    "個人情報の取扱について",
    "特定商取引法に基づく表記",
    "お問い合わせ",
  ];
  return (
    <Stack
      direction="row"
      sx={{
        background: "#414141",
        p: "30px 15%",
      }}
      spacing={3}
    >
      {footerItemList.map((text, index) => (
        <FooterLink text={text} key={index} />
      ))}
    </Stack>
  );
}
