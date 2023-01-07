import { Grid } from "@mui/material";
import CardItem from "../../components/CardItem";
import columnList from "./column-list.json";

export default function ColumnList() {
  return (
    <Grid container>
      {columnList.map((column, index) => (
        <CardItem {...column} key={index} />
      ))}
    </Grid>
  );
}
