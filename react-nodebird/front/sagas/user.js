import { all, fork, takeEvery, delay, put, call } from "redux-saga/effects";
import axios from 'axios';
import { CHANGE_NICKNAME_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, FOLLOW_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_OUT_ERROR, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, UNFOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS } from "../reducers/user";

function changeNicknameAPI(data) {
  return axios.patch('/user/nickname', { nickname: data });
}

function* changeNickname(action) {
  try {
    const result = yield call(changeNicknameAPI, action.data);
    // yield delay(1000); //데이터 없으니 테스트용..
    yield put({
      type: CHANGE_NICKNAME_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: CHANGE_NICKNAME_FAILURE,
      error: err.response.data,
    })
  }
}

function* unfollow(action) {
  try {
    // const result = yield call(logInAPI, action.data);
    yield delay(1000); //데이터 없으니 테스트용..
    yield put({
      type: UNFOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: UNFOLLOW_FAILURE,
      error: err.response.data,
    })
  }
}

function* follow(action) {
  try {
    // const result = yield call(logInAPI, action.data);
    yield delay(1000); //데이터 없으니 테스트용..
    yield put({
      type: FOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: FOLLOW_FAILURE,
      error: err.response.data,
    })
  }
}

function loadUserAPI() {
  return axios.get('/user');
}

function* loadUser(action) {
  try {
    const result = yield call(loadUserAPI, action.data);
    // yield delay(1000); //데이터 없으니 테스트용..
    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: err.response.data,
    })
  }
}

function logInAPI(data) {
  return axios.post('/user/login', data);
}

function* logIn(action) {
  try {
    const result = yield call(logInAPI, action.data);
    // yield delay(1000); //데이터 없으니 테스트용..
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    })
  }
}

function logOutAPI() {
  return axios.post('/user/logout');
}

function* logOut(action) {
  try {
    const result = yield call(logOutAPI);
    // yield delay(1000); //데이터 없으니 테스트용..
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

function signUpAPI(data) {
  return axios.post('/user', data);
}

function* signUp(action) {
  try {
    const result = yield call(signUpAPI, action.data);
    // yield delay(1000); //데이터 없으니 테스트용..
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


function* watchChangeNickname() {
  yield takeEvery(CHANGE_NICKNAME_REQUEST, changeNickname);
}
function* watchUnfollow() {
  yield takeEvery(UNFOLLOW_REQUEST, unfollow);
}
function* watchFollow() {
  yield takeEvery(FOLLOW_REQUEST, follow);
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
function* watchLoadUser() {
  yield takeEvery(LOAD_MY_INFO_REQUEST, loadUser);
}

export default function* userSaga() {
  yield all([
    fork(watchChangeNickname),
    fork(watchFollow),
    fork(watchUnfollow),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchLoadUser),
  ])
}