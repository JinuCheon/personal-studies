import React from 'react';

const Header = () => {
  return (
    <header className='main-header'>
      <div className='d-flex align-items-center ml-5'>
        <a href='#' className='waves-effect waves-light nav-link rounded d-none d-md-inline-block' data-toggle='push-menu'
          role='button'>
          <i className='nav-link-icon mdi mdi-menu text-white'></i>
        </a>
        {/* <!-- Logo --> */}
        <a href='index.html' className='logo'>
          {/* <!-- logo--> */}
          <div className='logo-lg'>
            <span className='light-logo'><img src={require('../assets/images/logo.png')} alt='logo' /></span>
          </div>
        </a>
      </div>
      {/* <!-- Header Navbar --> */}
      <nav className='navbar navbar-static-top'>
        {/* <!-- Sidebar toggle button--> */}
        <div className='app-menu'>
          <ul className='header-megamenu nav'>
            <li className='btn-group nav-item d-md-none'>
              <a href='#' className='waves-effect waves-light nav-link rounded' data-toggle='push-menu' role='button'>
                <i className='nav-link-icon mdi mdi-menu text-white'></i>
              </a>
            </li>
          </ul>
        </div>

        <div className='navbar-custom-menu r-side'>
          <ul className='nav navbar-nav'>
            {/* <!-- full Screen --> */}
            <li className='search-bar'>
              <div className='lookup lookup-circle lookup-right'>
                <input type='text' name='s'/>
              </div>
            </li>
            {/* <!-- Notifications --> */}
            <li className='dropdown notifications-menu'>
              <a href='#' className='waves-effect waves-light dropdown-toggle' data-toggle='dropdown' title='Notifications'>
                <i className='mdi mdi-bell'></i>
              </a>
              <ul className='dropdown-menu animated bounceIn'>

                <li className='header'>
                  <div className='p-20'>
                    <div className='flexbox'>
                      <div>
                        <h4 className='mb-0 mt-0'>Notifications</h4>
                      </div>
                      <div>
                        <a href='#' className='text-danger'>Clear All</a>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  {/* <!-- inner menu: contains the actual data --> */}
                  <ul className='menu sm-scrol'>
                    <li>
                      <a href='#'>
                        <i className='fa fa-users text-info'>Curabitur id eros quis nunc suscipit blandit.</i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-warning text-warning'>Duis malesuada justo eu sapien elementum, in semperdiam posuere.</i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-users text-danger'>Donec at nisi sit amet tortor commodo porttitor pretium</i>
                        a erat.
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-shopping-cart text-success'>In gravida mauris et nisi</i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-user text-danger'>Praesent eu lacus in libero dictum fermentum.</i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-user text-primary'>Nunc fringilla lorem</i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-user text-success'>Nullam euismod dolor ut quam interdum, at scelerisque ipsum imperdiet.</i>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='footer'>
                  <a href='#'>View all</a>
                </li>
              </ul>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
