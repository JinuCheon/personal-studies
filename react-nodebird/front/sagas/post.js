import { all, delay, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, generateDummyPost, LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LOAD_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, UNLIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS } from '../reducers/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';
import shortId from 'shortid';

function loadPostAPI() {
  return axios.get('/posts');
}

function* loadPosts(action) {
  try {
    const result = yield call(loadPostAPI, action.data);
    // yield delay(1000); //데이터 없으니 테스트용..
    // const id = shortId.generate();
    yield put({
      type: LOAD_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_POST_FAILURE,
      data: err.response.data,
    })
  }
}

function likePostAPI(data) {
  return axios.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield call(likePostAPI, action.data);
    // yield delay(1000); //데이터 없으니 테스트용..
    // const id = shortId.generate();
    yield put({
      type: LIKE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LIKE_POST_FAILURE,
      data: err.response.data,
    })
  }
}

function unlikePostAPI(data) {
  return axios.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
    const result = yield call(unlikePostAPI, action.data);
    // yield delay(1000); //데이터 없으니 테스트용..
    // const id = shortId.generate();
    yield put({
      type: UNLIKE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: UNLIKE_POST_FAILURE,
      data: err.response.data,
    })
  }
}

function AddPostAPI(data) {
  return axios.post('/post', { content: data });
}

function* addPost(action) {
  try {
    const result = yield call(AddPostAPI, action.data);
    // yield delay(1000); //데이터 없으니 테스트용..
    // const id = shortId.generate();
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
    yield put({
      type: ADD_POST_TO_ME,
      data: result.data.id,
    })
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      data: err.response.data,
    })
  }
}

function removePostAPI(data) {
  return axios.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield call(removePostAPI, action.data);
    // yield delay(1000); //데이터 없으니 테스트용..
    // const id = shortId.generate();
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: result.data
    });
    yield put({
      type: REMOVE_POST_OF_ME,
      data: action.data,
    })
  } catch (err) {
    yield put({
      type: REMOVE_POST_FAILURE,
      data: err.response.data,
    })
  }
}

function AddCommentAPI(data) {
  return axios.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield call(AddCommentAPI, action.data);
    // yield delay(1000); //데이터 없으니 테스트용..
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_COMMENT_FAILURE,
      data: err.response.data,
    })
  }
}

function* watchLikePost() {
  yield takeLatest(LIKE_POST_REQUEST, likePost);
}

function* watchUnlikePost() {
  yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}

function* watchLoadPosts() {
  yield takeLatest(LOAD_POST_REQUEST, loadPosts);
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([
    fork(watchLikePost),
    fork(watchUnlikePost),
    fork(watchLoadPosts),
    fork(watchAddPost),
    fork(watchAddComment),
    fork(watchRemovePost),
  ]);
}