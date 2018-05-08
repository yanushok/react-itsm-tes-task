import * as postConstants from "../constants/posts";

export function posts(state = [], action = {}) {
  switch (action.type) {
    case postConstants.POSTS_FETCHED:
      return action.data;
    default:
      return state;
  }
}