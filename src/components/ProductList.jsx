import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {productsLoader} from './Loader'
function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productsLoader().then (setProducts)
  }, []);
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}> {product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
