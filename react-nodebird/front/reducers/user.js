import produce from 'immer';

export const initialState = {
  loadUserLoading: false, //유저 정보 가져옴
  loadUserDone: false,
  loadUserError: null,

  followLoading: false, //로그인 시도중
  followDone: false,
  followError: null,
  
  unfollowLoading: false, //로그인 시도중
  unfollowDone: false,
  unfollowError: null,

  logInLoading: false, //로그인 시도중
  logInDone: false,
  logInError: null,
  
  logOutLoading: false, //로그아웃 시도중
  logOutDone: false,
  logOutError: null,

  signUpLoading: false, //회원가입 시도중
  signUpDone: false,
  signUpError: null,

  changeNicknameLoading: false, //회원가입 시도중
  changeNicknameDone: false,
  changeNicknameError: null,
  
  me: null,
  signUpData: {},
  loginData: {},
};

export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_ERROR = 'LOG_OUT_ERROR';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const ADD_POST_TO_ME = "ADD_POST_TO_ME";
export const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

const dummyUser = (data) => ({
  ...data,
  nickname: 'cheonjinwoo',
  id: 1,
  Posts: [{ id: 1 }],
  Followings: [{ nickname: 'AAA' }, { nickname: 'BBB' }, { nickname: 'CCC' }],
  Followers: [{ nickname: 'AAA' }, { nickname: 'BBB' }, { nickname: 'CCC' }],
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
  return produce(state, (draft) => {
    switch (action.type) {
      case LOAD_MY_INFO_REQUEST:
          draft.loadUserLoading = true;
          draft.loadUserError = null;
          draft.loadUserDone = false;
          break;

      case LOAD_MY_INFO_SUCCESS:
          draft.loadUserLoading = false;
          draft.loadUserDone = true;
          draft.me = action.data;
          break;

      case LOAD_MY_INFO_FAILURE:
          draft.loadUserLoading = false;
          draft.loadUserError = action.error;
          break;

      case FOLLOW_REQUEST:
          draft.followLoading = true;
          draft.followError = null;
          draft.followDone = false;
          break;

      case FOLLOW_SUCCESS:
          draft.followLoading = false;
          draft.followDone = true;
          draft.me.Followings.push({ id: action.data });
          break;

      case FOLLOW_FAILURE:
          draft.followLoading = false;
          draft.followError = action.error;
          break;

      case UNFOLLOW_REQUEST:
          draft.unfollowLoading = true;
          draft.unfollowError = null;
          draft.unfollowDone = false;
          break;

      case UNFOLLOW_SUCCESS:
          draft.unfollowLoading = false;
          draft.unfollowDone = true;
          draft.me.Followings.filter((v) => v.id !== action.data);
          break;

      case UNFOLLOW_FAILURE:
          draft.unfollowLoading = false;
          draft.unfollowError = action.error;
          break;

      //login 
      case LOG_IN_REQUEST:
          draft.logInLoading = true;
          draft.logInError = null;
          draft.logInDone = false;
          break;

      case LOG_IN_SUCCESS:
          draft.logInLoading = false;
          draft.logInDone = true;
          draft.me = action.data;
          break;

      case LOG_IN_FAILURE:
          draft.logInLoading = false;
          draft.logInError = action.error;
          break;
  
      // logout
      case LOG_OUT_REQUEST:
          draft.logOutLoading = true;
          draft.logOutDone = false;
          draft.logOutError = null;
          break;

      case LOG_OUT_SUCCESS:
          draft.logOutLoading = false;
          draft.logOutDone = true;
          draft.me = null;
          break;

      case LOG_OUT_ERROR:
          draft.logOutLoading = false;
          draft.logOutError = action.error;
          break;
  
      //sign up
      case SIGN_UP_REQUEST:
          draft.signUpLoading = true;
          draft.signUpDone = false;
          draft.signUpError = null;
          break;

      case SIGN_UP_SUCCESS:
          draft.signUpLoading = false;
          draft.signUpDone = true;
          break;

      case SIGN_UP_FAILURE:
          draft.signUpLoading = false;
          draft.signUpError = action.error;
          break;
  
       //change nickname
       case CHANGE_NICKNAME_REQUEST:
          draft.changeNicknameLoading = true;
          draft.changeNicknameDone = false;
          draft.changeNicknameError = null;
          break;

      case CHANGE_NICKNAME_SUCCESS:
          draft.me.nickname = action.data.nickname;
          draft.changeNicknameLoading = false;
          draft.changeNicknameDone = true;
          break;

      case CHANGE_NICKNAME_FAILURE:
          draft.changeNicknameLoading = false;
          draft.changeNicknameError = action.error;
          break;
  
      case ADD_POST_TO_ME:
          draft.me.Posts.unshift({ id: action.data });
          break;
  
      case REMOVE_POST_OF_ME:
          draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
          break;
  
      default:
        break;
    }
  })
  
};

export default rootReducer;