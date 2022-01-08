import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const ShippingForm = () => {

  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="form-group">
      <label>제품 선택</label>
      <select className="form-control select2 select2-hidden-accessible" tabIndex="-1" aria-hidden="true">
        <option selected="selected">Alabama</option>
        <option>Alaska</option>
        <option>California</option>
        <option>Delaware</option>
        <option>Tennessee</option>
        <option>Texas</option>
        <option>Washington</option>
      </select>
      <span className="select2 select2-container select2-container--default select2-container--above" dir="ltr">
        <span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-labelledby="select2-4l6z-container"><span className="select2-selection__rendered" id="select2-4l6z-container" title="Texas">Texas</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span>
        <span className="dropdown-wrapper" aria-hidden="true"></span>
      </span>
      
      <label>거래처 선택</label>
      <select className="form-control select2 select2-hidden-accessible" tabIndex="-1" aria-hidden="true">
        <option selected="selected">Alabama</option>
        <option>Alaska</option>
        <option>California</option>
        <option>Delaware</option>
        <option>Tennessee</option>
        <option>Texas</option>
        <option>Washington</option>
      </select>
      <span className="select2 select2-container select2-container--default select2-container--above" dir="ltr"><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-labelledby="select2-4l6z-container"><span className="select2-selection__rendered" id="select2-4l6z-container" title="Texas">Texas</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
      
      <label className="col-form-label col-md-2">수량</label>
      <div className="col-md-10">
        <input name="stock" className="form-control" type="number" />
      </div>
      
      <button onClick={console.log("button clicked")} type="submit" className="float-right mr-4 waves-effect waves-light btn mb-5 bg-gradient-blackberry">생성하기</button>
      
    </div>

  )
};

export default ShippingForm;