import React from 'react';
import useFetch from '../hooks/useFetch';
import getToken from '../utils/getToken';

const PurchasePage = () => {
  const [ purchases, getPurchases ] = useFetch();
  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases';
    getPurchases(url, getToken());    
  }, []);
  

  return (
    <div>PurchasePage</div>
  )
}

export default PurchasePage;