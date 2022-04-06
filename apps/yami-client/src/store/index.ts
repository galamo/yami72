import { createStore, combineReducers, compose, applyMiddleware } from "redux"
import { settingsReducers } from "./reducers/settingsReducers"
import { newsReducers } from "./reducers/newsReducers"
import { authReducer } from "./reducers/authReducer"


const rootReducer = combineReducers({
    settingsReducers,
    newsReducers,
    authReducer
})
export const store = createStore(rootReducer)