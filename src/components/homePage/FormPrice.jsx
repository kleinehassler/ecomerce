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
            <h2 className='filterPrice__title'>Filter Price <box-icon name='purchase-tag'></box-icon></h2>
            <div>
                <label htmlFor="from">From: <box-icon type='solid' name='arrow-from-bottom'></box-icon></label>
                <input {...register('from')} id='from' type="number"  className='input__price'/>
            </div>
            <div>
                <label htmlFor="from">To: <box-icon name='arrow-from-top' type='solid' ></box-icon></label>
                <input {...register('to')}  id='from' type="number" className='input__price'/>
            </div>
            <button>Filter Price <box-icon name='filter-alt' type='solid' ></box-icon></button>
        </form>
    </div>
  )
}

export default FormPrice;