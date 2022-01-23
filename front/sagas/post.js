import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function AddPostAPI() {
  return axios.post('/api/post');
}

function* addPost(action) {
  try {
    // const result = yield call(AddPostAPI, action.data);
    yield delay(1000); //데이터 없으니 테스트용..
    yield put({
      type: 'ADD_POST_SUCCESS',
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: err.response.data,
    })
  }
}

function* watchAddPost() {
  yield takeLatest('ADD_POST_REQUEST', addPost);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
  ]);
}