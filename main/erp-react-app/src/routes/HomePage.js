import React from 'react';

const Home = () => {
  return (
    <div className="content-wrapper">
      <div className="container-full">
        <div className="content-header">
          <div className="d-flex align-items-center">
            <div className="mr-auto">
              <h3 className="page-title">통계</h3>
              <div className="d-inline-block align-items-center">
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#"><i className="mdi mdi-home-outline"></i></a></li>
                    <li className="breadcrumb-item active" aria-current="page">통계</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <section className="content">
          <div className="row"></div>
        </section>
      </div>
    </div>
  );
};

export default Home;