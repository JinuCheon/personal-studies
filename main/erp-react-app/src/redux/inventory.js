const NEW_PRODUCT = 'inventory/NEW_PRODUCT';

let idCounter = 1001;

export const newProduct = (productName, price, stock) => ({
  type: NEW_PRODUCT,
  productName: productName,
  price: price,
  stock: stock
});

const initialState = [
  { id: 1000, productName: 'pencel', price: 1000, stock: 200 },
  { id: 1001, productName: 'eraser', price: 500, stock: 240 },
];

export default function inventory(state = initialState, action) {
  switch (action.type) {
    case NEW_PRODUCT:
      console.log(action);
      idCounter+=1;
      return [...state, {
        id: idCounter,
        productName : action.productName,
        price: action.price,
        stock: action.stock
      }];
    default:
      return state;
  }
}
