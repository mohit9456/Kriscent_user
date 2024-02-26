import './App.css';
import { NavBar } from './components/Navigation/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePAge from './components/Authentication/HomePAge';
import Login from './components/Authentication/Login';
import Signup from './components/Authentication/Signup';
import MyCart from './components/GoToCart/MyCart';
import Products from './components/ProductPage/Products';
import Product from './components/ProductPage/Product';
import MenCollection from './components/ProductPage/MenCollection';

function App() {

  return (
    <div className="App">
      
      <Router>  
      <NavBar />
        <Routes>
          <Route path='/' element={<HomePAge />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/mycart' element={<MyCart />} />
          <Route path='/men' element={<MenCollection />} />
          <Route path='/women' element={<Products />} />
          <Route path='/summer' element={<Products />} />
          <Route path='/winter' element={<Products />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='*' element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
