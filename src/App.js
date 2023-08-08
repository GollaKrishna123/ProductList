import logo from './logo.svg';
// import './App.css';
import { useEffect, useState } from 'react';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    productsData();
  }, [])
  const productsData = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const newData = await data.json();
    setProducts(newData);
    console.log(products);
  }

  return (
    <div>
      <ProductList products={products}/>
    </div>
  );
}

export default App;
