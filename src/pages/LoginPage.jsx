import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const createToken = useAuth();
  const { handleSubmit, register, reset } = useForm();
  const submit = data => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login';
    createToken(url, data);
    reset ({
      email: '',
      password: '',
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="user">Email: </label>
          <input {...register('email')} id='user' type="email" />
        </div>
        <div>
          <label htmlFor="key">Password</label>
          <input {...register('password')} id='key' type="password" />
        </div>
        <button>Login</button>
      </form>
      <p>If you are not registered then you can <Link to='/register'> register here</Link> </p>
    </div>
  )
}

export default LoginPage;