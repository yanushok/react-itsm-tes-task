import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import { posts } from "./postsReducer";
import { post } from "./postReducer";

const rootReducer = combineReducers({
    router: routerReducer,
    posts,
    post,
});

export default rootReducer;