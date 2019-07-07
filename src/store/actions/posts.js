import * as actionTypes from './types';

export const fetchPosts = () => {
    return {
        type: actionTypes.POST_LIST_FETCH_START,
    };
};

export const updateAuthorFilter = (author) => {
    return {
        type: actionTypes.POST_FILTER_UPDATE,
        payload: author
    };
};