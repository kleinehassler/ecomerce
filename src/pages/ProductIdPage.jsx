
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SimilarItems from '../components/ProductIdPage/SimilarItems';
import useFetch from '../hooks/useFetch.js';
import InfoProduct from '../components/productPage/InfoProduct';
import SliderImages from '../components/ProductIdPage/SliderImages';

const ProductIdPage = () => {

  const [ productId, getProductId ] = useFetch();
  const param = useParams();

 // console.log(typeof(param.id));
  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${param.id}`;
    getProductId(url);
  }, [param]);
    
  return (
    <div>
      <h2>idProduct</h2>
      <SliderImages
        images={productId?.images}      
      />

      <InfoProduct 
        productId={productId}
      />
      <SimilarItems
        categoryId={productId?.categoryId}
        productId={param.id}
      />

    </div>
  )
}

export default ProductIdPage;