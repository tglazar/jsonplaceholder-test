import { takeLatest, all } from 'redux-saga/effects';
import * as actionType from '../actions/types';
import { fetchPostsSaga }  from './posts';

function* watchPosts() {
    yield takeLatest(actionType.POST_LIST_FETCH_START, fetchPostsSaga);
}

export function* rootSaga() {
    yield all([
        watchPosts(),
    ])
}