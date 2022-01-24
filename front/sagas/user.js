import { all, fork, takeEvery, delay, put } from "redux-saga/effects";
import axios from 'axios';
import { LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_OUT_ERROR, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from "../reducers/user";

function logInAPI() {
  return axios.post('/api/login');
}

function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data);
    yield delay(1000); //데이터 없으니 테스트용..
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
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
      type: LOG_OUT_SUCCESS,
      error: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_ERROR,
      error: err.response.data,
    })
  }
}

function signUpAPI() {
  return axios.post('/api/signUp');
}

function* signUp(action) {
  try {
    // const result = yield call(signUpAPI);
    yield delay(1000); //데이터 없으니 테스트용..
    yield put({
      type: SIGN_UP_SUCCESS,
      error: action.data,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    })
  }
}


function* watchLogIn() {
  yield takeEvery(LOG_IN_REQUEST, logIn);
}
function* watchLogOut() {
  yield takeEvery(LOG_OUT_REQUEST, logOut);
}
function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
  ])
}