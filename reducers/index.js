import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from 'redux'; //분리된 리듀서 합치게 도와줌
import user from './user'
import post from './post'

//초기 state 정의.
// const initialState = {
//     user: {
        
//     },
//     post: {
        
//     }
// };

//동적으로 데이터를 변경을 할 수 있게 생성기를 만든 것이다. action creator라고 한다.
//(이전상태, 액션) => 다음상태
// const rootReducer = (state = initialState, action) => {
//     switch (action.type){
//         case HYDRATE:
//             return {...state, ...action.payload};
        
//         default: // default 이렇게 처리 안해주면, 리듀서 초기화 할 때 undefined가 됨
//             return state;
//     }
// };

const rootReducer = combineReducers({
    index: (state = {}, action) =>{
        switch (action.type){
            case HYDRATE:
                return {...state, ...action.payload};
            
            default: // default 이렇게 처리 안해주면, 리듀서 초기화 할 때 undefined가 됨
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;