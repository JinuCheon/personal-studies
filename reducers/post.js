export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '천진우',
        },
        content: '아이유 짱 이쁨 #IU #아이유',
        Images: [{
            src: 'https://image.bugsm.co.kr/artist/images/1000/800491/80049126.jpg',
        }, {
            src: 'https://img.koreatimes.co.kr/upload/newsV2/images/202104/186fd69ed8724f4cacacc573247ec281.jpg/dims/resize/740/optimize',
        }, {
            src: 'https://img.insight.co.kr/static/2020/05/26/700/q18j53u55e75qqe6oa66.jpg',
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