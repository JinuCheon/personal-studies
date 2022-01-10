const SET_NEW_SHIPPING_TEXT = 'newShippingInputBox/setNewShippingText';
const CLEAR_NEW_SHIPPING_TEXT = 'newShippingInputBox/clearNewProductText';


export const setNewShippingText = (value, name) => ({
  type: SET_NEW_SHIPPING_TEXT,
  value,
  name
});

export const clearNewShippingText = () => ({
  type: CLEAR_NEW_SHIPPING_TEXT
});

const initialState = {
  productName: '',
  price:'',
  stock: 0
};

export default function newShippingInputBox(state = initialState, action) {
  switch (action.type) {
    case SET_NEW_SHIPPING_TEXT:
      return ({
        ...state,
        [action.name]: action.value
      });
    case CLEAR_NEW_SHIPPING_TEXT:
      return ({
        ...initialState
      });
    default:
      return state;
  }
}
