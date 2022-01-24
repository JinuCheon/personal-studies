export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '천진우',
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
    }, {
      src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
    }],
    Comments: [{
      User: {
        nickname: 'nero',
      },
      content: '첫 댓글~',
    }, {
      User: {
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
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

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

const dummyPost = {
  id: 2,
  content: '더미데이터입니다.',
  User: {
    id: 1,
    nickname: '천진우',
  },
  Images: [],
  Comments: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      }
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: false,
        addPostLoading: false,
        addPostDone: true,
      };
      
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      }


    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      }
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: true,
      };
      
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      }

    default:
      return {
        ...state,
      };
    
  }
};

export default rootReducer;
