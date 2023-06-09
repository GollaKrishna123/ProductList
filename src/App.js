import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
    <div className="App">
      {products.map((product) =>
        <div className="product-card" key={product.id}>
          <div>
            <img className="product-card-image" src={product.image} />
            <h3 className="product-card-title">{product.title}</h3>
            <h3 className="product-card-price">${product.price}</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
