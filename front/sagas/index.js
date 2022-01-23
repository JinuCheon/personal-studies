import { all, fork } from 'redux-saga/effects';
import postSaga from './post';
import userSaga from './user';

// takeEvery는 take를 무한 반복한다.
// 일반 take는 한 번 실행되면 사라지기 때문에, 로그인-로그아웃-> 로그인 불가능하다.

// takeLastest는 여러번의 action이 한번에 들어오면 마지막 하나만 처리해버린다.
// 이 예제에서는 사용자 오류로 게시글이 여러개 작성되는 것을 피한다.
// 그리고 첫번째 요청만 처리하는 것은 takeLeading 이다.

// takeLastest, takeLeading은 요청 중복을 막을 순 없고, 응답 요청을 걸러준다.
// 그래서 이 방식의 경우, 서버에서 확인하여 처리해야하고,
// throttle 이라는 함수로 여유 시간을 줘서 기다리는 방법으로 요청 중복을 제거하는 방법도 있긴하다..

export default function* rootSaga() {
  yield all([
    fork(postSaga),
    fork(userSaga),
  ]);
}