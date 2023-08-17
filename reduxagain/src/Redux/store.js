import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as authreducer } from "./authreducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ authreducer })

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))