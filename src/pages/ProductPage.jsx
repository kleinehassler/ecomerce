import React, { useEffect } from 'react'
import InfoProduct from '../components/productPage/InfoProduct'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch.js';
import SimilarItems from '../components/ProductIdPage/SimilarItems';

const ProductPage = () => {

  const [ productId, getProductId ] = useFetch();
  const param = useParams();
  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products/${param.id}';
    getProductId(url);
  }, [param]);
 
  return (
    <div>
      <h2>ProductPage</h2>
      <InfoProduct 
        productId={productId}
      />
      

    </div>
  )
}

export default ProductPage