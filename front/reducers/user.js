export const initialState = {
  isLoggingIn: false, //로그인 시도중
  isLoggedIn: false,
  isLoggingOut: false, //로그아웃 시도중
  me: null,
  signUpData: {},
  loginData: {},
};

export const loginRequestAction = (data) => {
  return {
    type: 'LOG_IN_REQUEST',
    data,
  }
}
export const logoutRequestAction = () => {
  return {
    type: 'LOG_OUT_REQUEST',
  }
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN_REQUEST':
      return {
        ...state,
        isLoggingIn: true,
      }
    case 'LOG_IN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true,
        isLoggingIn: false,
        me: { ...action.data, nickname: 'cheonjinwoo'},
      }
    case 'LOG_IN_FIALURE':
      return {
        ...state,
        isLoggedIn: false,
        isLoggingIn: false,
      }

    // logout
    case 'LOG_OUT_REQUEST':
      return {
        ...state,
        isLoggingOut: true,
      }
    case 'LOG_OUT_SUCCESS':
      return {
        ...state,
        isLoggedIn: false,
        isLoggingOut: false,
        me: null,
      }
    case 'LOG_OUT_FIALURE':
      return {
        ...state,
        isLoggingOut: false,
      }
    default:
      return{
        ...state,
      }
  }
};

export default rootReducer;