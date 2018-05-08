import * as postConstants from "../constants/posts";

export function post(state = {}, action) {
    switch (action.type) {
        case postConstants.POST_FETCHED: {
            return {
                ...state,
                ...action.post
            };
        }
        case postConstants.POST_CREATED: {
            return {
                id: action.id,
                title: action.title,
                text: action.text,
                timestamp: action.timestamp,
            };
        }
        default:
            return state;
    }
}