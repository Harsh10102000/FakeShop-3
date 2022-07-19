
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Products from './components/Products'
import ProductDetails from './components/ProductDetails'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Products/>
      <Footer/>
      {/* <ProductDetails/> */}
    </div>
  );
}

export default App;
