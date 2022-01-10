const NEW_SHIPPING = 'shipping/NEW_SHIPPING';

export const newShipping = (productName, customer, stock) => ({
  type: NEW_SHIPPING,
  customer: customer,
  productName: productName,
  stock: stock
});

const initialState = [];
  // {productName: '', customer: '', stock: 0},

export default function shipping(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case NEW_SHIPPING:
      return [...state, {
          productName : action.productName,
          customer: action.customer,
          stock: action.stock
        }];
    default:
      return state;
  }
}
