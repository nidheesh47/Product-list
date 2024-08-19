import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productLoader } from './Loader';
function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    productLoader(productId).then(setProduct);
  }, [productId]);
  if (!product) {
    return <h1>loading...</h1>;
  }
  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.body}</p>
    </div>
  );
}

export default ProductDetail;
