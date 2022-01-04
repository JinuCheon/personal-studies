import { React } from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import './assets/css/style.css';
import './assets/css/skin_color.css'
import './assets/vendor_components/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js'
import Aside from './components/Aside';
import Home from './routes/Home';
import InventoryManage from './routes/InventoryManage';
// import './assets/vendor_components/bootstrap/datatable/datatables.min.css';


function App() {
  console.log("hi");
  return (
    <Router>
      <div className='hold-transition light-skin sidebar-mini theme-blackberry'>
        <Header />
        <Aside />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/inventory-manage' element={<InventoryManage />} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
