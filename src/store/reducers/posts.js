import * as actionTypes from '../actions/types';

const initialState = {
    authorName: '',
    data: [],
    users: [],
    currentPost: {},
};

/** Helpers */
function findUserById(users, id) {
    const userIndex = users.findIndex((user) => {
        return user.id === id;
    });

    return {
        ...users[userIndex]
    };
}

/** Action reducers */
function updateFilter(state, action) {
    return {
        ...state,
        authorName: action.payload,
    };
}

function postsListLoadStart(state, action) {
    return {
        ...state,
        loadingList: true,
        error: action.payload,
        data: [],
    };
}

function postsListLoadSuccess(state, action) {
    return {
        ...state,
        loadingList: false,
        error: {},
        data: action.payload.posts.map((post) => {
            return {
                ...post,
                author: findUserById(action.payload.users, post.userId).name
            };
        }),
        users: action.payload.users,
    };
}

function postDetailsLoadStart(state){
    return {
        ...state,
        loadingPost: true,
        currentPost: {}
    };
}

function postDetailsLoadEnd(state, action) {
    return {
        ...state,
        loadingPost: false,
        currentPost: {
            ...action.payload.post,
            author: findUserById(state.users, action.payload.post.userId).name,
            comments: action.payload.comments
        }
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.POST_FILTER_UPDATE:
            return updateFilter(state, action);
        case actionTypes.POST_LIST_FETCH_START:
        case actionTypes.POST_LIST_FETCH_FAIL:
            return postsListLoadStart(state, action);
        case actionTypes.POST_LIST_FETCH_SUCCESS:
            return postsListLoadSuccess(state, action);

        case actionTypes.POST_DETAILS_FETCH_START:
        case actionTypes.POST_DETAILS_FETCH_FAIL:
            return postDetailsLoadStart(state);
        case actionTypes.POST_DETAILS_FETCH_SUCCESS:
            return postDetailsLoadEnd(state, action);

        default:
            return state;
    }
};

export default reducer;