const NEW_SHIPPING = 'shipping/NEW_SHIPPING';


export const newShipping = (productName, customer, stock) => {
  const date = new Date(+new Date() + 3240 * 10000).toISOString().split("T")[0]
  const time = new Date().toTimeString().split(" ")[0];
  return (
    {
      type: NEW_SHIPPING,
      time : date + ' ' + time,
      customer: customer,
      productName: productName,
      stock: stock
    }
  );
}

const initialState = [];
  // {productName: '', customer: '', stock: 0},

export default function shipping(state = initialState, action) {
  console.log(state);
  switch (action.type) {
    case NEW_SHIPPING:
      return [...state, {
          time : action.time,
          productName : action.productName,
          customer: action.customer,
          stock: action.stock
        }];
    default:
      return state;
  }
}
