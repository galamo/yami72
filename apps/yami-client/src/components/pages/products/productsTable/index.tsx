import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { IProductClient } from "../../../../store/services/productsService";

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
  const columns = keys.map((key: string, index: number) => {
    // @ts-ignore
    const label: string = (tableColumns[key] as any)?.label;
    return (
      <TableCell key={key} align={"left"}>
        {label}
      </TableCell>
    );
  });
  const getACtionsCell = () => {
    return (
      <TableCell key={"Actions"} align={"left"}>
        Actions
      </TableCell>
    );
  };
  columns.push(getACtionsCell());
  return columns;
}

export default function BasicTable(props: {
  data: Array<IProductClient>;
  deleteAction: Function;
  addToCartAction: Function;
}) {
  const { data } = props;
  const [firstItem] = data;
  const cells = getCells(firstItem);
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
              <TableCell align="left">
                <Button
                  onClick={() => {
                    props.deleteAction(row.id);
                  }}
                  variant="outlined"
                  color="error"
                >
                  Delete
                </Button>
                <Button
                  onClick={() => {
                    props.addToCartAction(row.id);
                  }}
                  variant="outlined"
                >
                  Add To Cart
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
