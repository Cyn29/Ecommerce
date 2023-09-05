import './App.css'
import Header from './components/Header/Header';
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer';
import ProductDetail from './components/ProductDetail/ProductDetail';
import DataProvider from './components/Context/DataContext';


function App() {

  return (
    
    <DataProvider>
    <Header />
    <Products/>
    <ProductDetail/>
    <Footer />
    </DataProvider>
      )
}

export default App
