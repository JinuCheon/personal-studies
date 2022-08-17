import shortId from 'shortId';
import produce from 'immer';
import faker from 'faker';

export const initialState = {
  mainPosts: [],
  imagePaths: [],
  postAdded: false,
  hasMorePosts: true,
  likePostLoading: false,
  likePostDone: false,
  likePostError: false,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: false,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: false,
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

export const generateDummyPost = (number) => Array(number).fill().map(() => ({
    id: shortId.generate(),
    User: {
      id: shortId.generate(),
      nickname: faker.name.findName(),
    },
    content: faker.lorem.paragraph(),
    Images: [{ src: "https://via.placeholder.com/500x200" }],
    Comments: [{
      User: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
      },
      content: faker.lorem.sentence(),
    }],
}));

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

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
      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;

      case LOAD_POST_SUCCESS:
          draft.loadPostLoading = false;
          draft.loadPostDone = true;
          draft.mainPosts = action.data.concat(draft.mainPosts);
          draft.hasMorePosts = draft.mainPosts.length < 50;
          break;

      case LOAD_POST_FAILURE:
          draft.loadPostLoading = false;
          draft.loadPostError = action.error;
          break;

      case ADD_POST_REQUEST:
          draft.addPostLoading = true;
          draft.addPostDone = false;
          draft.addPostError = null;
          break;

      case ADD_POST_SUCCESS:
          draft.mainPosts.unshift(action.data);
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
          console.log(action.data);
          draft.mainPosts = state.mainPosts.filter((v) => v.id !== action.data.PostId);
          draft.removePostLoading = false;
          draft.removePostDone = true;
          break;
        
      case REMOVE_POST_FAILURE:
          draft.removePostLoading = false;
          draft.removePostError = action.error;
          break;

      case LIKE_POST_REQUEST:
          draft.likePostLoading = true;
          draft.likePostDone = false;
          draft.likePostError = null;
          break;

      case LIKE_POST_SUCCESS: {
          const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
          post.Likers.push({ id: action.data.UserId });
          draft.likePostLoading = false;
          draft.likePostDone = true;
          break;
        }
        
      case LIKE_POST_FAILURE:
          draft.likePostLoading = false;
          draft.likePostError = action.error;
          break;
      
      case UNLIKE_POST_REQUEST:
          draft.unlikePostLoading = true;
          draft.unlikePostDone = false;
          draft.unlikePostError = null;
          break;

      case UNLIKE_POST_SUCCESS: {
          const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
          post.Likers = post.Likers.filter((v) => v.id !== action.data.UserId);
          draft.unlikePostLoading = false;
          draft.unlikePostDone = true;
          break;
        }
        
      case UNLIKE_POST_FAILURE:
          draft.unlikePostLoading = false;
          draft.unlikePostError = action.error;
          break;
  
  
      case ADD_COMMENT_REQUEST:
          draft.addCommentLoading = true;
          draft.addCommentDone = false;
          draft.addCommentError = null;
          break;
  
      case ADD_COMMENT_SUCCESS:
        const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
        post.Comments.unshift(action.data);
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
