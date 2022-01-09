import { React } from 'react';
// import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css';
import './assets/css/style.css';
import './assets/css/skin_color.css'
import './assets/vendor_components/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js'
import Aside from './components/Aside';
import HomePage from './routes/HomePage';
import InventoryManagePage from './routes/InventoryManagePage';
import CreateNewProductPage from './routes/CreateNewProductPage';
import ShippingPage from './routes/ShippingPage';
import useScript from './hooks/useScript';


function App() {
  useScript();
  return (
    <Router>
      <div className='hold-transition light-skin sidebar-mini theme-blackberry'>
        <Header />
        <Aside />
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/inventory-manage' element={<InventoryManagePage />} />
          <Route path='/create-new-product' element={<CreateNewProductPage />} />
          <Route path='/shipping' element={<ShippingPage />} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
