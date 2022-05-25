import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { CreateOrder } from "../orders/create-order";
import { useDispatch } from "react-redux";
import BasicTable from "./productsTable";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import debounce from "lodash/debounce";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { getProductsAction } from "../../../store/asyncFunctions/products";
import axiosInstance from "../../../store/services/index.axios";
import { WithLoading } from "../../ui-components/with-loading";
import { getCartDetailsAction } from "../../../store/asyncFunctions/cart";
const MySwal = withReactContent(Swal);

export function ProductsPage() {
  const selectCategoryItem = {
    category: "Select Category",
  };
  const [categories, setCtegories] = useState([]);
  const initialCategoryType: { category: string | null } = { category: null };
  const [selectedCategory, setSelectedCategory] = useState(initialCategoryType);
  const [isFreeTextSearch, setIsFreeTextSearch] = useState(true);
  const products = useSelector((state: any) => state.productsReducer.products);
  const currentCart = useSelector(
    (state: any) => state.cartReducers.currentCart
  );

  useEffect(() => {
    getCategories();
    getCartDetailsAction();
  }, []);

  useEffect(() => {
    getProductsAction(selectedCategory.category as string);
  }, [selectedCategory]);

  async function getCategories() {
    try {
      const result = await axiosInstance.get("/products/categories");
      const { categories: categoriesFromApi } = result.data;
      setCtegories(categoriesFromApi);
    } catch (ex) {}
  }

  async function deleteProductHandler(id: number) {
    try {
      const result = await axiosInstance.delete(`/products/${id}`);
      // TODO: delete success popup
      getProductsAction(selectedCategory.category as string);
    } catch (ex) {
      // TODO: delete failure popup
    }
  }

  async function addToCartHandler(productId: number) {
    try {
      const result = await axiosInstance.post(`/carts/product`, {
        cartId: currentCart.id,
        productId,
      });

      await MySwal.fire({
        title: <strong>Product added!</strong>,
        icon: "success",
      });
    } catch (ex) {
      await MySwal.fire({
        title: <strong>Please try again!</strong>,
        icon: "error",
      });
      // TODO: delete failure popup
    }
  }

  function changeHandler(e: any) {
    if (!e.target.value) return;
    setSelectedCategory({ category: e.target.value });
  }

  const categoryTextChangeHandler = debounce(changeHandler, 350);

  return (
    <div style={{ width: "50%", margin: "auto auto" }}>
      <h1> Products </h1>
      <div>
        Free text Search
        <Switch
          checked={isFreeTextSearch}
          onChange={() => {
            setIsFreeTextSearch(!isFreeTextSearch);
          }}
        />
      </div>
      {/* TODO move to another component - Crete goggle component */}
      {isFreeTextSearch && (
        <div style={{ marginBottom: "10px" }}>
          <TextField
            id="outlined-basic"
            label="Category"
            variant="outlined"
            onChange={categoryTextChangeHandler}
          />
        </div>
      )}
      {!isFreeTextSearch && (
        <div>
          <WithLoading isLoading={Boolean(!categories.length)}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedCategory?.category}
                label="Category"
                onChange={({ target }) => {
                  setSelectedCategory({ category: target.value });
                }}
              >
                {categories.map((p: any) => {
                  return (
                    <MenuItem key={p.category} value={p.category}>
                      {p.category}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </WithLoading>
        </div>
      )}
      <div>
        <BasicTable
          data={products}
          addToCartAction={addToCartHandler}
          deleteAction={(id: number) => {
            deleteProductHandler(id);
          }}
        />
      </div>
    </div>
  );
}
