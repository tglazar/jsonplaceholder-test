import { takeLatest, all } from 'redux-saga/effects';
import * as actionType from '../actions/types';
import { fetchPostsSaga, fetchPostDetailsSaga }  from './posts';

function* watchPosts() {
    yield takeLatest(actionType.POST_LIST_FETCH_START, fetchPostsSaga);
}

function* watchPostDetails() {
    yield takeLatest(actionType.POST_DETAILS_FETCH_START, fetchPostDetailsSaga);
}

export function* rootSaga() {
    yield all([
        watchPosts(),
        watchPostDetails(),
    ])
}