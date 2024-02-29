import React from 'react';
import { useForm } from 'react-hook-form';
import './styles/homePage.css';


const FormPrice = ({setFormValue}) => {
    // react-hook-form
    const { handleSubmit, register, reset } = useForm();
    const submit = (data) => {
        setFormValue({
            from: data.from || 0,
            to: data.to || Infinity, 
        })

    }

  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <h2 className='filterPrice__title'>Filter Price <ion-icon name="cash-outline"></ion-icon></h2>
            <div>
                <label htmlFor="from">From: <ion-icon name="pricetag-outline"></ion-icon></label>
                <input {...register('from')} id='from' type="number"  className='input__price'/>
            </div>
            <div>
                <label htmlFor="from">To: <ion-icon name="pricetags-outline"></ion-icon></label>
                <input {...register('to')}  id='from' type="number" className='input__price'/>
            </div>
            <button>Filter Price <ion-icon name="filter-outline"></ion-icon></button>
        </form>
    </div>
  )
}

export default FormPrice;