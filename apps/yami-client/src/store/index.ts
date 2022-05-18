import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { settingsReducers } from "./reducers/settingsReducers";
import { newsReducers } from "./reducers/newsReducers";
import { authReducer } from "./reducers/authReducer";
import { modalReducer } from "./reducers/modalReducer";
import { ordersReducer } from "./reducers/ordersReducer";
import { productsReducer } from "./reducers/productsReducer";

const rootReducer = combineReducers({
  settingsReducers,
  newsReducers,
  authReducer,
  modalReducer,
  ordersReducer,
  productsReducer,
});
export const store = createStore(rootReducer);
