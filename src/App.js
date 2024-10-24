import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/Pages/Footer';
import { Header } from './components/Pages/Header';
import { MainPage } from './components/Pages/IndexPage/MainPage';
import { Navigation } from './components/Pages/Navigation';
import { ProductPage } from './components/Pages/ProductsPages/ProductPage';
import ShoppingCartPage from './components/Pages/BasketComponents/ShoppingCartPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/products' element={<ProductPage  />} />
        <Route path='/basket' element={<ShoppingCartPage />} />
          {/* <Route path='/checkout' element={<Checkout />} />
          <Route path='/single' element={<Single />} />
          
           */}
        </Routes>
        
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
