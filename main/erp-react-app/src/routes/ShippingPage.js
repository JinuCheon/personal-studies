import React from 'react';
import ShippingForm from '../components/ShippingForm';

const Shipping = () => {
  return (
    <div className="content-wrapper">
      <div className="container-full">
        <div className="content-header">
          <div className="d-flex align-items-center">
            <div className="mr-auto">
              <h3 className="page-title">출고</h3>
              <div className="d-inline-block align-items-center">
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#"><i className="mdi mdi-home-outline"></i></a></li>
                    <li className="breadcrumb-item" aria-current="page">Extra</li>
                    <li className="breadcrumb-item active" aria-current="page">출고</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {ShippingForm()}
      </div>
    </div>
)};

export default Shipping;
