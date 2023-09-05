import './App.css'
import Header from './components/Header/Header';
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer';
import DataProvider from './components/Context/DataContext';
import AddProductModal from './components/AddProductModal/AddProductModal'




function App() {

  return (
    
    <DataProvider>
    <Header />
    <AddProductModal />
    <Products />
    <Footer />
    </DataProvider>
      )
}

export default App
