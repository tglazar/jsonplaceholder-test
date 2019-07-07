import {all, call, put} from 'redux-saga/effects';
import *  as actionTypes from '../actions/types';

const baseUrl = 'https://jsonplaceholder.typicode.com';

export function* fetchPostsSaga() {
    try {
        const responses = yield all({
            posts: call(fetch, `${baseUrl}/posts`),
            users: call(fetch, `${baseUrl}/users`),
        });

        yield put({
            type: actionTypes.POST_LIST_FETCH_SUCCESS,
            payload: {
                posts: yield responses.posts.json(),
                users: yield responses.users.json()
            }
        });
    } catch (e) {
        yield put({
            type: actionTypes.POST_LIST_FETCH_FAIL,
            payload: e
        });
    }
}
