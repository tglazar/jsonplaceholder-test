import { takeLatest, all } from 'redux-saga/effects';
import * as actionType from '../actions/types';
import { fetchPostsSaga, fetchPostDetailsSaga, deleteCommentSaga }  from './posts';

function* watchPosts() {
    yield takeLatest(actionType.POST_LIST_FETCH_START, fetchPostsSaga);
}

function* watchPostDetails() {
    yield takeLatest(actionType.POST_DETAILS_FETCH_START, fetchPostDetailsSaga);
}

function* watchCommentDelete() {
    yield takeLatest(actionType.POST_COMMENT_DELETE_START, deleteCommentSaga);
}

export function* rootSaga() {
    yield all([
        watchPosts(),
        watchPostDetails(),
        watchCommentDelete(),
    ])
}