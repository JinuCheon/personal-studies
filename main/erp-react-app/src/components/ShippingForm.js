import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newShipping } from '../redux/shipping';
import { setNewShippingText, clearNewShippingText } from '../redux/newShippingInputBox';

const renderProductList = (data) => data.map((product) => {
  const { id, productName } = product;
  return (
    <option data-productId="{id}">{productName}({id})</option>
  )
});

const ShippingForm = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const { productName, customer, stock } = store.newShippingInputBox; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    console.log(e.target);
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    dispatch(setNewShippingText(value, name));
  };

  const createButton = (e) => {
    if (productName === '' || customer === '' || stock <= 0 ){
      console.log("올바른 값 선택 부탁..");
    } else {
      dispatch(newShipping(productName, customer, stock));
      dispatch(clearNewShippingText());
    }
  }

  return (
    <section className="content">
      <div className="form-group col-12 col-md-6">
        <label>제품 선택</label>
        <select onChange={onChange} name="productName" className="col-12 col-md-6 form-control select2 select2-hidden-accessible" tabIndex="-1" aria-hidden="true">
          <option selected>선택</option>
          {renderProductList(store.inventory)}
        </select>
        {/* <span className="select2 select2-container select2-container--default select2-container--above" dir="ltr">
          <span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-labelledby="select2-4l6z-container"><span className="select2-selection__rendered" id="select2-4l6z-container" title="Texas">Texas</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span>
          <span className="dropdown-wrapper" aria-hidden="true"></span>
        </span> */}
        
        <label>거래처 선택</label>
        <select onChange={onChange} name="customer" className="col-12 col-md-6 form-control select2 select2-hidden-accessible" tabIndex="-1" aria-hidden="true">
          <option selected>선택</option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
          <option>D</option>
          <option>E</option>
          <option>F</option>
        </select>
        {/* <span className="select2 select2-container select2-container--default select2-container--above" dir="ltr"><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-labelledby="select2-4l6z-container"><span className="select2-selection__rendered" id="select2-4l6z-container" title="Texas">Texas</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span> */}
        
        <label>수량</label>
        <input onChange={onChange} name="stock" className="col-12 col-md-6 form-control" type="number" />
        
        <button onClick={createButton} type="submit" className="float-left mt-3 waves-effect waves-light btn mb-5 bg-gradient-blackberry">생성하기</button>
        
      </div>
    </section>

  )
};

export default ShippingForm;
