import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";

import { history } from "../routing/routes";
import rootReducer from "../reducers";

const middleware = routerMiddleware(history);

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk, middleware)
);