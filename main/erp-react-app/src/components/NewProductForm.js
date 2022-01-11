import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { newProduct } from '../redux/inventory';
import { setNewProductText, clearNewProductText } from '../redux/newProductInputBox';


const NewProductInputForm = () => {

  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const { productName, price, stock } = store.newProductInputBox; // 비구조화 할당을 통해 값 추출

  const onChange = useMemo(
    () => (e) => {
      const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
      dispatch(setNewProductText(value, name));
  }, []);

  const createButton = useMemo(
    () => (e) => {
      dispatch(newProduct(productName, price, stock));
      dispatch(clearNewProductText());
  });

  return (
    <section className="content">
      <div className="col-12 col-12">
        <div className="box">
          <div className="box-header">
            <h4 className="box-title">제품 정보 입력</h4>
          </div>
          <div className="box-body">
            <div className="form-group row">
              <label className="col-form-label col-md-2">제품명</label>
              <div className="col-md-10">
                <input name="productName" onChange={onChange} className="form-control" value={productName} />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-form-label col-md-2">판매단가</label>
              <div className="col-md-10">
                <input name="price" onChange={onChange} className="form-control" value={price} />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-form-label col-md-2">수량</label>
              <div className="col-md-10">
                <input name="stock" onChange={onChange} className="form-control" type="number" value={stock} />
              </div>
            </div>

          </div>
          <div>
            <button onClick={createButton} type="submit" className="float-right mr-4 waves-effect waves-light btn mb-5 bg-gradient-blackberry">생성하기</button>
          </div>
        </div>
      </div>
    </section>
  )
};

export default NewProductInputForm;
