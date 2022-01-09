const SET_NEW_PRODUCT_TEXT = 'counter/SET_NEW_PRODUCT_TEXT';
const CLEAR_NEW_PRODUCT_TEXT = 'counter/CLEAR_NEW_PRODUCT_TEXT';


export const setNewProductText = (value, name) => ({
  type: SET_NEW_PRODUCT_TEXT,
  value,
  name
});

export const clearNewProductText = () => ({
  type: CLEAR_NEW_PRODUCT_TEXT
});

const initialState = {
  productName: '',
  price:'',
  stock: 0
};

export default function newProductInputBox(state = initialState, action) {
  switch (action.type) {
    case SET_NEW_PRODUCT_TEXT:
      return ({
        ...state,
        [action.name]: action.value
      });
    case CLEAR_NEW_PRODUCT_TEXT:
      return ({
        ...initialState
      });
    default:
      return state;
  }
}
