
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductIdPage from './pages/ProductIdPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import PurchasesPage from './pages/PurchasePage';
import HeaderNav from './shared/HeaderNav';
import ProtectedRoutes from './pages/ProtectedRoutes';
import { useState } from 'react';



function App() {

  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
   <div>
    <HeaderNav openCartModal={openCartModal} />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/product/:id' element={<ProductIdPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route element={<ProtectedRoutes />}>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/purchases' element={<PurchasesPage/>}/>
      </Route>
    </Routes>
    
    {isCartModalOpen && <CartPageModal onClose={() => setIsCartModalOpen(false)} />}
   
   </div>
  )
}

export default App;
