
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import DataProvider from './components/Context/DataContext';
import AddProductModal from './components/AddProductModal/AddProductModal';
import ProductDetail from '../src/components/ProductDetail/ProductDetail';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
{
path: '/',
element: (
<>
<Header />
<AddProductModal />
<Products />
<Footer />
</>
),
},

{
path: '/productdetail/:productId',
element: (
<>
<ProductDetail />
</>
),
},

]);


function App() {
return (
<DataProvider>
<RouterProvider router={router} />
</DataProvider>
);
}


export default App;

