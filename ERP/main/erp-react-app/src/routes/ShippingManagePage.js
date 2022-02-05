import React from 'react';
import ShippingTable from '../components/shippingTable';

const ShippingManagePage = () => {
  return (
    <div className="content-wrapper">
      <div className="container-full">
        <div className="content-header">
          <div className="d-flex align-items-center">
            <div className="mr-auto">
              <h3 className="page-title">재고관리</h3>
              <div className="d-inline-block align-items-center">
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#"><i className="mdi mdi-home-outline"></i></a></li>
                    <li className="breadcrumb-item" aria-current="page">Extra</li>
                    <li className="breadcrumb-item active" aria-current="page">재고관리</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <section className="content">
          <div className="col-12 col-12">
            <div className="box">
              <div className="box-body p-15">
                <div className="table-responsive">
                  <ShippingTable />
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>
)};

export default ShippingManagePage;
