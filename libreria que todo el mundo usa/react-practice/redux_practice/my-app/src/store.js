import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

//reducer
import { buttonReducer } from "./reducers/buttonReducer";

const reducer = combineReducers({ butonList: buttonReducer });

const middleware = [];

export const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);
