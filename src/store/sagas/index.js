import { takeLatest, all } from 'redux-saga/effects';
import * as actionType from '../actions/types';
import { fetchPostsSaga, fetchPostDetailsSaga, addCommentSaga, deleteCommentSaga }  from './posts';

function* watchPosts() {
    yield takeLatest(actionType.POST_LIST_FETCH_START, fetchPostsSaga);
}

function* watchPostDetails() {
    yield takeLatest(actionType.POST_DETAILS_FETCH_START, fetchPostDetailsSaga);
}

function* watchCommentAdd() {
    yield takeLatest(actionType.POST_COMMENT_ADD_START, addCommentSaga);
}

function* watchCommentDelete() {
    yield takeLatest(actionType.POST_COMMENT_DELETE_START, deleteCommentSaga);
}

export function* rootSaga() {
    yield all([
        watchPosts(),
        watchPostDetails(),
        watchCommentAdd(),
        watchCommentDelete(),
    ])
}