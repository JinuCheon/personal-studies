import React from 'react';
import { Link } from 'react-router-dom';

const Aside = () => {
  return (
    <>
    <aside className='main-sidebar'>
      {/* <!-- sidebar--> */}
      <section className='sidebar'>
        {/* <!-- sidebar menu--> */}
        <ul className='sidebar-menu' data-widget='tree'>
          <li>
            <Link to='./index.html'>
              <i className='mdi mdi-minus-network'></i>
              <span>통계</span>
            </Link>
          </li>
          <li>
            <Link to='./inventory-manage'>
              <i className='mdi mdi-border-color'></i>
              <span>재고관리</span>
            </Link>
          </li>
          <li>
            <Link to='./create-new-product'>
              <i className='mdi mdi-cube-outline'></i>
              <span>제품추가</span>
            </Link>
          </li>
          <li>
            <Link to='./shipping'>
              <i className='mdi mdi-export'></i>
              <span>출고</span>
            </Link>
          </li>
          <li>
            <Link to='./release-manage'>
              <i className='mdi mdi-border-color'></i>
              <span>출고관리</span>
            </Link>
          </li>

          <li className='header line'></li>

        </ul>
      </section>
    </aside>
    </>
  )
};

export default Aside;
