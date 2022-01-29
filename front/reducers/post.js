import shortId from 'shortId';
import { produce } from 'immer';

export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '천진우',
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      id: shortId.generate(),
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    }, {
      id: shortId.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
    }, {
      id: shortId.generate(),
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
    }],
    Comments: [{
      id: shortId.generate(),
      User: {
        id: shortId.generate(),
        nickname: 'nero',
      },
      content: '첫 댓글~',
    }, {
      id: shortId.generate(),
      User: {
        id: shortId.generate(),
        nickname: 'hero',
      },
      content: '두번재 댓글~',
    }]
  }],
  imagePaths: [],
  postAdded: false,
  addPostLoading: false,
  addPostDone: false,
  addPostError: false,
  removePostLoading: false,
  removePostDone: false,
  removePostError: false,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: false,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

// 액션을 그때그때 생성해주는 '동적 ACTION TRAY'
export const addPost = (data) =>({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) =>({
  type: ADD_COMMENT_REQUEST,
  data,
});

const dummyPost = (data) => ({
  id: data.id,
  content: data.content,
  User: {
    id: 1,
    nickname: '천진우',
  },
  Images: [],
  Comments: [],
});

const dummyComment = (data) => ({
  id: shortId.generate(),
  content: data,
  User: {
    id: 1,
    nickname: '진우천'
  },
})
//reducer = 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성!!!)
const rootReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
          draft.mainPosts.unshift(dummyPost(action.data));
          draft.addPostLoading = false;
          draft.addPostDone = true;
          break;

      case ADD_POST_FAILURE:
          draft.addPostLoading = false;
          draft.addPostError = action.error;
          break;
  
      case REMOVE_POST_REQUEST:
          draft.removePostLoading = true;
          draft.removePostDone = false;
          draft.removePostError = null;
          break;

      case REMOVE_POST_SUCCESS:
          draft.mainPosts = state.mainPosts.filter((v) => v.id !== action.data);
          draft.removePostLoading = false;
          draft.removePostDone = true;
          break;
        
      case REMOVE_POST_FAILURE:
          draft.removePostLoading = false;
          draft.removePostError = action.error;
          break;
  
  
      case ADD_COMMENT_REQUEST:
          draft.addCommentLoading = true;
          draft.addCommentDone = false;
          draft.addCommentError = null;
          break;
  
      case ADD_COMMENT_SUCCESS:
        const post = draft.mainPost.find((v) => v.id === action.data.postId);
        post.Comments.unshift(dummyComment(action.data.content));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
        // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
        // const post = { ...state.mainPosts[postIndex] };
        // post.Comments = [dummyComment(action.data.content), ...post.Comments];
        // const mainPosts = [...state.mainPosts];
        // mainPosts[postIndex] = post;
  
        // return {
        //   ...state,
        //   mainPosts,
        //   addCommentLoading: false,
        //   addCommentDone: true,
        // };
        
      case ADD_COMMENT_FAILURE:
          draft.addCommentLoading = false;
          draft.addCommentError = action.error;
          break;
  
      default:
        break;
      
    }
  });
};

export default rootReducer;
