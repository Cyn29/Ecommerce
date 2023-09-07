import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Contact from "./components/Contact/Contact";
import DataProvider from "./components/Context/DataContext";
import AddProductModal from "./components/AddProductModal/AddProductModal";
import ProductDetail from "../src/components/ProductDetail/ProductDetail";
import { RouterProvider, createBrowserRouter } from "react-router-dom/dist";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <Header />
      <AddProductModal />
      <Products />
      <Contact />
      </>
    ),
  },
  {
    path: "/productdetail/:productId",
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
