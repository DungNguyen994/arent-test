import { Grid } from "@mui/material";
import MealItem from "./MealItem";

export default function MealHistory() {
  const MealImageList = [
    { src: "Imagine/m01.jpg", text: "05.21.Morning" },
    { src: "Imagine/l03.jpg", text: "05.21.Lunch" },
    { src: "Imagine/d01.jpg", text: "05.21.Dinner" },
    { src: "Imagine/l01.jpg", text: "05.21.Snack" },
    { src: "Imagine/m01.jpg", text: "05.20.Morning" },
    { src: "Imagine/l02.jpg", text: "05.20.Lunch" },
    { src: "Imagine/d02.jpg", text: "05.20.Dinner" },
    { src: "Imagine/s01.jpg", text: "05.20.Snack" },
  ];
  return (
    <Grid container>
      {MealImageList.map(({ src, text }, index) => (
        <MealItem key={index} bgImg={src} text={text} />
      ))}
    </Grid>
  );
}
