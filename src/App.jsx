import './App.css'
import Header from './components/Header/Header';
import Products from './components/Products/Products'
import Contact from './components/Contact/Contact'
import DataProvider from './components/Context/DataContext';
import AddProductModal from './components/AddProductModal/AddProductModal'




function App() {

  return (
    
    <DataProvider>
    <Header />
    <AddProductModal />
    <Products />
    <Contact />
    </DataProvider>
      )
}

export default App
