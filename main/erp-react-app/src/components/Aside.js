import React from 'react';

const Aside = () => {
  return (
    <>
    <aside className='main-sidebar'>
      {/* <!-- sidebar--> */}
      <section className='sidebar'>
        {/* <!-- sidebar menu--> */}
        <ul className='sidebar-menu' data-widget='tree'>
          <li>
            <a href='./index.html'>
              <i className='mdi mdi-minus-network'></i>
              <span>통계</span>
            </a>
          </li>
          <li>
            <a href='./inventory-manage.html'>
              <i className='mdi mdi-border-color'></i>
              <span>재고관리</span>
            </a>
          </li>
          <li>
            <a href='./new-product.html'>
              <i className='mdi mdi-cube-outline'></i>
              <span>제품추가</span>
            </a>
          </li>
          <li>
            <a href='./release'>
              <i className='mdi mdi-export'></i>
              <span>출고</span>
            </a>
          </li>
          <li>
            <a href='./release-manage'>
              <i className='mdi mdi-border-color'></i>
              <span>출고관리</span>
            </a>
          </li>

          <li className='header line'></li>

        </ul>
      </section>
    </aside>
    </>
  )
};

export default Aside;