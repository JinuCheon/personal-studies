import React from 'react';
import { useSelector } from 'react-redux';

// const dummyData = [
//   { id: 1000, productName: 'pencel', price: 1000, stock: 200 },
//   { id: 1001, productName: 'eraser', price: 500, stock: 240 },
// ];

const renderTableData = (data) => data.map((product) => {
  const { id, productName, price, stock } = product;
  return (
    <tr>
      <td>{id}</td>
      <td>{productName}</td>
      <td>{price}</td>
      <td>{stock}</td>
      <td className="text-center">
        <div className="list-icons d-inline-flex">
          <div className="list-icons-item dropdown">
            <a href="#" className="list-icons-item dropdown-toggle" data-toggle="dropdown"><i className="fa fa-file-text"></i></a>
            <div className="dropdown-menu dropdown-menu-right">
              <a href="#" className="dropdown-item"><i className="fa fa-download"></i> Download</a>
              <a href="#" className="dropdown-item"><i className="fa fa-print"></i> Print</a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item"><i className="fa fa-pencil"></i> Edit</a>
              <a href="#" className="dropdown-item"><i className="fa fa-remove"></i> Remove</a>
            </div>
          </div>
        </div>
      </td>
    </tr>
  )
});

const InventoryTable = () => {
  const store = useSelector((state) => state); //reducer

  return (
    <table id="tickets" className="table mt-0 table-hover no-wrap table-borderless" data-page-size="10">
      <thead>
        <tr>
          <th>제품코드</th>
          <th>제품명</th>
          <th>판매단가</th>
          <th>수량</th>
          <th>수정</th>
        </tr>
      </thead>
      <tbody>
        {renderTableData(store.inventory)}
      </tbody>
    </table>
  );
};

export default InventoryTable;
