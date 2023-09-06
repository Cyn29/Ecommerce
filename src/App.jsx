import './App.css';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import DataProvider from './components/Context/DataContext';
import AddProductModal from './components/AddProductModal/AddProductModal';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <AddProductModal />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Footer />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

function Home() {
  return <div>
    <Products />
    <Footer />
  </div>;
}

export default App;
