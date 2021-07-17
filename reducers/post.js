export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '제로초',
        },
        content: '첫 게시글 안녕하세요 #해시태그',
        Images: [{
            src: 'https://images.chosun.com/resizer/HoGaPo0K-HNh_w9wmkUxpt404rc=/616x0/filters:focal(291x444:301x454)/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/XG2MW2H3ZRW5FHDVSOMF6FDT3E.jpg',
        }, {
            src: 'https://i.pinimg.com/564x/1d/e5/b1/1de5b1350ddf2f37ee536aec562680e3.jpg',
        }, {
            src: 'https://i.pinimg.com/564x/1d/e5/b1/1de5b1350ddf2f37ee536aec562680e3.jpg',
        }],
        Comments: [{
            User: {
                nickname: 'hero',
            },
            content: '안녕하세요 반가워요',
        }, {
            User: {
                nickname: 'hero2',
            },
            content: '안녕하세요2 반가워요2',
        }]
    }],
    imagePaths: [],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id: 2,
    content: '더미데이터이빈다.',
    User: {
        id: 1,
        nickname: '제로초',
    },
    Images: [],
    Comment: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            }
        default:
            return state;
    }
}

export default reducer;