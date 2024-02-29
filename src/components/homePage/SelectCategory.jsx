import React, { useEffect, useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import './styles/homePage.css';

const SelectCategory = ({setSelectValue}) => {
    const [ categories, getCategories] = useFetch();
    useEffect(() => {
        const url = "https://e-commerce-api-v2.academlo.tech/api/v1/categories";
        getCategories(url);
    }, []);

    const textSelect = useRef();
    const handleCategory = () => {
        setSelectValue(textSelect.current.value);
    }

  return (
    <div>
        <div className='FilterContainer_Category'>
          <h3>By Category</h3>
            <select onChange={handleCategory} ref={textSelect} className='Filter__Category'>
                <option value={0}>all</option>
                {
                    categories?.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))
                }
            </select>  
        </div>
        
    </div>
  )
}

export default SelectCategory;