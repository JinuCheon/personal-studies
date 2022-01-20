import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from '../reducers/index';

const configureStore = () => {
  const middlewares = [];
  // 개발 시, 크롬 extention에서 action을 볼 수 있다.
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares)) //개발모드
  const store = createStore(reducer, enhancer);
  // console.log(store);
  return store;
};

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' });
// console.log(wrapper);
export default wrapper;