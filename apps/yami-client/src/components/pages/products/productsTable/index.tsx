import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IProductClient } from "../../../../store/services/productsService";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const tableColumns = {
  productName: { label: "Name", order: 2 },
  productCost: { label: "Cost", order: 3 },
  id: { label: "ID", order: 1 },
  category: { label: "Category", order: 4 },
  productCode: { label: "Code", order: 5 },
};

function getCells(item: any) {
  if (typeof item !== "object") return;
  const keys = Object.keys(item);
  return keys.map((key: string, index: number) => {
    // @ts-ignore
    const label: string = (tableColumns[key] as any)?.label;
    console.log(label);
    return (
      <TableCell key={key} align={"left"}>
        {label}
      </TableCell>
    );
  });
}

export default function BasicTable(props: { data: Array<IProductClient> }) {
  const { data } = props;
  const [firstItem] = data;
  const cells = getCells(firstItem);
  console.log(data, "data");
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>{cells}</TableRow>
        </TableHead>
        <TableBody>
          {data.map((row: IProductClient) => (
            <TableRow
              key={`${row.id}`}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.productCode}
              </TableCell>
              <TableCell align="left">{row.productName}</TableCell>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.productCost}</TableCell>
              <TableCell align="left">{row.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
