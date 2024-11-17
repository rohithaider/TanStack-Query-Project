import ProductDetails from "./components/ProductDetails";
import ProductList from "./components/ProductList";

export default function App() {
  return (
    <div className="flex m-2">
      <ProductList />
      <ProductDetails id={1}/>
    </div>
  );
}
