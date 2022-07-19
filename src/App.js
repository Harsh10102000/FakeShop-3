
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './components/Products'
import Product from './components/ProductDetails'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Products/>}></Route>
      <Route path='/showproduct/:id' element={<Product/>}></Route>
      
      </Routes>
      <Footer/>
      {/* <ProductDetails/> */}
    </div>
  );
}

export default App;
