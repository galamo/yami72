import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import { settingsReducers } from "./reducers/settingsReducers"
import { newsReducers } from "./reducers/newsReducers"
import { authReducer } from "./reducers/authReducer"
import { modalReducer } from "./reducers/modalReducer"
import { ordersReducer } from "./reducers/ordersReducer"


const rootReducer = combineReducers({
    settingsReducers,
    newsReducers,
    authReducer,
    modalReducer,
    ordersReducer
})
export const store = createStore(rootReducer)