export const initialState = {
  logInLoading: false, //로그인 시도중
  logInDone: false,
  logInError: null,
  
  logOutLoading: false, //로그아웃 시도중
  logOutDone: false,
  logOutError: null,

  signUpLoading: false, //회원가입 시도중
  signUpDone: false,
  signUpError: null,
  
  me: null,
  signUpData: {},
  loginData: {},
};


export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_ERROR = 'LOG_OUT_ERROR';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FIALURE = 'FOLLOW_FIALURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FIALURE = 'UNFOLLOW_FIALURE';

const dummyUser = (data) => ({
  ...data,
  nickname: 'cheonjinwoo',
  id: 1,
  Posts: [],
  Followings: [],
  Followers: [],
})

export const loginRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  }
}
export const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST,
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        logInLoading: true,
        logInError: null,
        logInDone: false,
      }
    case LOG_IN_SUCCESS:
      return {
        ...state,
        logInLoading: false,
        logInDone: true,
        me: dummyUser,
      }
    case LOG_IN_FAILURE:
      return {
        ...state,
        logInLoading: false,
        logInError: action.error,
      }

    // logout
    case LOG_OUT_REQUEST:
      return {
        ...state,
        logOutLoading: true,
        logOutDone: false,
        logOutError: null,
      }
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        logOutLoading: false,
        logOutDone: true,
        me: null,
      }
    case LOG_OUT_ERROR:
      return {
        ...state,
        logOutLoading: false,
        logOutError: action.error,
      }

    //sign up
    case SIGN_UP_REQUEST:
      return {
        ...state,
        signUpLoading: true,
        signUpDone: false,
        signUpError: null,
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        signUpDone: true,
      }
    case SIGN_UP_FAILURE:
      return {
        ...state,
        signUpLoading: false,
        signUpError: action.error,
      }
    default:
      return{
        ...state,
      }
  }
};

export default rootReducer;