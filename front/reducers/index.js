import { HYDRATE } from 'next-redux-wrapper'; //react SSR을 위함.
import user from './user';
import post from './post';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return {
          ...state,
          ...action.payload,
        }
      default:
        return{
          ...state,
        }
    }
  },
  user,
  post,
});

export default rootReducer;