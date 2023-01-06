import { Stack, Box } from "@mui/material";

interface ItemProps {
  src: string;
}
const width = { xs: "15%", md: "134px" };
const CategoryItem = ({ src }: ItemProps) => (
  <Box
    sx={{ width, padding: "6px 18px", cursor: "pointer" }}
    component="img"
    src={src}
  />
);

export default function Category() {
  const sources = [
    "Imagine/morning-hex.png",
    "Imagine/lunch-hex.png",
    "Imagine/dinner-hex.png",
    "Imagine/snack-hex.png",
  ];

  return (
    <Stack justifyContent="space-evenly" direction="row">
      {sources.map((src, index) => (
        <CategoryItem src={src} key={index} />
      ))}
    </Stack>
  );
}
