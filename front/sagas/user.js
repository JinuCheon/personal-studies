import { all, fork, takeEvery, delay, put } from "redux-saga/effects";
import axios from 'axios';

function logInAPI() {
  return axios.post('/api/login');
}

function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data);
    yield delay(1000); //데이터 없으니 테스트용..
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: err.response.data,
    })
  }
}

function logOutAPI() {
  return axios.post('/api/logout');
}

function* logOut(action) {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000); //데이터 없으니 테스트용..
    yield put({
      type: 'LOG_OUT_SUCCESS',
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: err.response.data,
    })
  }
}


function* watchLogIn() {
  yield takeEvery('LOG_IN_REQUEST', logIn);
}
function* watchLogOut() {
  yield takeEvery('LOG_OUT_REQUEST', logOut);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
  ])
}