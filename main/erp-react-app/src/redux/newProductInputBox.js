const SET_NEW_PRODUCT_TEXT = 'counter/SET_NEW_PRODUCT_TEXT';


export const setNewProductText = (value, name) => ({
  type: SET_NEW_PRODUCT_TEXT,
  value,
  name
});

const initialState = {
  productName: 'init1',
  price:'init2',
  stock: 111
};

export default function newProductInputBox(state = initialState, action) {
  switch (action.type) {
    case SET_NEW_PRODUCT_TEXT:
      return ({
        ...state,
        [action.name]: action.value
      });
    default:
      return state;
  }
}