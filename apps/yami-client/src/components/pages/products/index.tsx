import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { CreateOrder } from "../orders/create-order";
import { useDispatch } from "react-redux";
import BasicTable from "./productsTable";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { getProductsAction } from "../../../store/asyncFunctions/products";

export function ProductsPage() {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.productsReducer.products);
  useEffect(() => {
    getProductsAction();
  }, []);

  console.log(products, "products");
  return (
    <div style={{ width: "50%", margin: "auto auto" }}>
      <h1> Products </h1>
      <div>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={"cat"}
            label="Category"
            onChange={() => {}}
          >
            {products.map((p: any) => {
              return <MenuItem> {p.category} </MenuItem>;
            })}
          </Select>
        </FormControl>
      </div>
      <div>
        <BasicTable data={products} />
      </div>
    </div>
  );
}
