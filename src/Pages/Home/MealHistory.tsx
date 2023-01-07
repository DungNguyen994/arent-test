import { Grid } from "@mui/material";
import MealItem from "../../components/CardItem";
import { MealList } from "../../contanst";

export default function MealHistory() {
  return (
    <Grid container>
      {MealList.map(({ src, text }, index) => (
        <MealItem key={index} bgImg={src} text={text} />
      ))}
    </Grid>
  );
}
