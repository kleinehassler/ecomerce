
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsThunk } from '../store/slices/product.slice';
import ProductCard from '../components/homePage/ProductCard';
import '../components/homePage/styles/homePage.css';
import FormPrice from '../components/homePage/FormPrice';
import SelectCategory from '../components/homePage/SelectCategory';

const body = document.querySelector('body');

const HomePage = () => {

const [ fromValue, setFormValue ] = useState({
  from: 0, 
  to: Infinity,
});

  const [ selectValue, setSelectValue ] = useState(0);
  const [ productName, setProductName ] = useState('');
  const products = useSelector(store => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products';
    dispatch(getProductsThunk(url));
  }, []);

  const textInput = useRef();
  const handleSearch = () => {
    setProductName(textInput.current.value.toLowerCase().trim());
  }
  
  const cbFilter = (prod) => {
    const { from, to } = fromValue;
    const ByName = prod.title.toLowerCase().includes(productName);
    const ByCategory = selectValue === 0 ? true : prod.categoryId === +selectValue;
    const ByPrice = +prod.price > +from && +prod.price < +to;
    return  ByName && ByCategory && ByPrice;
  }

  const handleDark = () => {
    body.classlist.toggle('dark');
  }

  return (
    <div>
      <div className='FilterContainer1'>
        <div className='Filter__Container3'>
          <button onClick={handleDark}>DarkMode</button>
          <FormPrice 
            setFormValue={setFormValue}
          />
          <div className='Filter__Container4'>
            <div className='Filter__Container5'>
              <h3>By Name</h3>
              <input type="text" ref={textInput} onChange={handleSearch} className='input__search'/>
            </div>
            <SelectCategory
              setSelectValue={setSelectValue}
            />
          </div>
        </div>
        <section className='products__container'>
        {
          products?.filter(cbFilter).map(prod => (
            <ProductCard 
              key={prod.id}
              prod={prod}
            />
          ))
        }
      </section>
      </div>
      
    </div>
  )
}

export default HomePage;