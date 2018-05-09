import * as postConstants from "../constants/posts";

export function post(state = {}, action) {
    switch (action.type) {
        case postConstants.POST_FETCHED: {
            return {
                ...state,
                ...action.data
            };
        }
        default:
            return state;
    }
}