import './App.css'
import Header from './components/Header/Header';
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer';
import DataProvider from './components/Context/DataContext';




function App() {

  return (
    
    <DataProvider>
    <Header />
    <Products />
    <Footer />
    </DataProvider>
      )
}

export default App
