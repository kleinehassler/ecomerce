
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import '../components/loginPage/loginPage.css';

const LoginPage = () => {

  const  [isLogin, setIsLogin ] = useState(true);
  const createToken = useAuth();
  const { handleSubmit, register, reset } = useForm();
  const submit = data => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login';
    createToken(url, data);
    reset ({
      email: '',
      password: '',
    });
    setIsLogin(false);
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLogin(true);
  }

  return (
    <div>
      {
         isLogin ? 
         <>
            <form onSubmit={handleSubmit(submit)}>
              <div className='login__inputs'>
                <label htmlFor="user">Email: </label>
                <input {...register('email')} id='user' type="email" />
                <label htmlFor="key">Password</label>
                <input {...register('password')} id='key' type="password" />
              </div>
              <button>Login</button>
            </form>
            <p>If you are not registered then you can <Link to='/register'><span className='register__link'>register here</span></Link> </p>
         </> :   
            <button onClick={handleLogout}>Logout</button>
      }
    </div>
  )
}

export default LoginPage;