
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SimilarItems from '../components/ProductIdPage/SimilarItems';
import useFetch from '../hooks/useFetch.js';
import InfoProduct from '../components/productPage/InfoProduct';
import SliderImages from '../components/ProductIdPage/SliderImages';
import '../components/ProductIdPage/styles/similarItems.css';
import '../components/ProductIdPage/styles/productIdPage.css';
import '../components/productPage/styles/infoProduct.css';

const ProductIdPage = () => {

  const [ productId, getProductId ] = useFetch();
  const param = useParams();

 // console.log(typeof(param.id));
  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${param.id}`;
    getProductId(url);
  }, [param]);
    
  return (
    <div className='container__productId'>
      <h2>{productId?.title}</h2>
      <SliderImages
        images={productId?.images}      
      />

      <div className='container__infoProduct'>
        <InfoProduct 
          productId={productId}
        />
      </div>

      <div className='container_similarItems'>
        <SimilarItems
          categoryId={productId?.categoryId}
          productId={param.id}
        />
      </div>
      

    </div>
  )
}

export default ProductIdPage;