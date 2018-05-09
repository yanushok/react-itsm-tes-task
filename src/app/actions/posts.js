import * as postConstants from '../constants/posts';
import api from "../api";

const postsFetched = data => ({
    type: postConstants.POSTS_FETCHED,
    data
});

const postFetched = data => ({
    type: postConstants.POST_FETCHED,
    data
});

export const fetchPosts = (page = 1, limit = 5) => dispatch =>
    api.posts
    .fetchAll(page, limit)
    .then(posts => dispatch(postsFetched(posts)));

export const getPost = (id) => dispatch =>
    api.posts
    .get(id)
    .then(post => dispatch(postFetched(post)));

export const createPost = data => dispatch =>
    api.posts
    .create(data);