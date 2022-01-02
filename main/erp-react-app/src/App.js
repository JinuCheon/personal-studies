import { React } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import './assets/css/style.css';
import './assets/css/skin_color.css'
import './assets/vendor_components/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js'
// import './assets/vendor_components/bootstrap/datatable/datatables.min.css';


function App() {
  console.log("hi");
  return (
    <>
      <div className='hold-transition light-skin sidebar-mini theme-blackberry'>
        <div className='wrapper'>
        <Header />
        </div>

        
      </div>
      <Helmet>
          <script src="./assets/vendor_components/jquery-3.3.1/jquery-3.3.1.js"></script>
          {/* <!-- fullscreen --> */}
          <script src="./assets/vendor_components/screenfull/screenfull.js"></script>

          {/* <!-- popper --> */}
          <script src="./assets/vendor_components/popper/dist/popper.min.js"></script>

          {/* <!-- Bootstrap 4.0--> */}
          <script src="./assets/vendor_components/bootstrap/dist/js/bootstrap.min.js"></script>

          {/* <!-- This is data table --> */}
          <script src="./assets/vendor_components/datatable/datatables.min.js"></script>

          {/* <!-- SlimScroll --> */}
          <script src="./assets/vendor_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>

          {/* <!-- FastClick --> */}
          <script src="./assets/vendor_components/fastclick/lib/fastclick.js"></script>

          {/* <!-- sparkline --> */}
          <script src="./assets/vendor_components/jquery-sparkline/dist/jquery.sparkline.js"></script>

          {/* <!-- peity --> */}
          <script src="./assets/vendor_components/jquery.peity/jquery.peity.js"></script>

          {/* <!-- Pearl Admin App --> */}
          <script src="./assets/js/template.js"></script>

          {/* <!-- Pearl Admin for demo purposes --> */}
          <script src="./assets/js/demo.js"></script>

          {/* <!-- Pearl Admin for Data Table --> */}
          <script src="./assets/js/pages/data-table.js"></script>

          {/* <!-- demo only --> */}
          <script src="./assets/js/pages/app-ticket.js"></script>
        </Helmet>
    </>
  );
}

export default App;
