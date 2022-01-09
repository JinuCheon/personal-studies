//모듈.
/* 액션 타입 선언 */
// const GET_INVENTORY = 'inventory/GET_INVENTORY';
const NEW_PRODUCT = 'inventory/NEW_PRODUCT';

/* 액션 생성함수 선언 */
let idCounter = 1001; // todo 데이터에서 사용 할 고유 id
// export const getInventory = text => ({
//   type: GET_INVENTORY,
//   todo: {
//     id: nextId++, // 새 항목을 추가하고 nextId 값에 1을 더해줍니다.
//     text
//   }
// });
export const newProduct = (productName, price, stock) => ({
  type: NEW_PRODUCT,
  productName: productName,
  price: price,
  stock: stock
});

/* 초기 상태 선언 */
// 리듀서의 초기 상태는 꼭 객체타입일 필요 없습니다.
// 배열이여도 되고, 원시 타입 (숫자, 문자열, 불리언 이여도 상관 없습니다.
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
