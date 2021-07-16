import { HYDRATE } from "next-redux-wrapper";
//초기 state 정의.
const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {},
    },
    post: {
        mainPosts: [],
    }
};

//동적으로 데이터를 변경을 할 수 있게 생성기를 만든 것이다. action creator라고 한다.
export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}

export const logoutAction = () => {
    return {
        type: 'LOG_OUT',
    }
}

//(이전상태, 액션) => 다음상태
const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case HYDRATE:
            return {...state, ...action.payload};
        case 'LOG_IN':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data,
                }
            };
        case 'LOG_OUT':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null,
                }
            };
        default: // default 이렇게 처리 안해주면, 리듀서 초기화 할 때 undefined가 됨
            return state;
    }
};

export default rootReducer;