import React, { useState } from 'react';
import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASEURl } from '../../utils/const';

export default function RegisterPage() {
  const [values, setValues] = useState({
    email: '',
    username: '',
    password: '',
    password2: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${BASEURl}register/`, values);
      if (response.status >= 200 && response.status <= 300) {
        navigate('/login')
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='container'>
      <div className='register_block'>
        <h1>Регистрация</h1>
        <div className='register_form'>
          <input
            className='register_inp'
            type='email'
            name='email'
            placeholder='Почта'
            value={values.email}
            onChange={handleChange}
          />
          <input
            className='register_inp'
            type='text'
            name='username'
            placeholder='Логин'
            value={values.username}
            onChange={handleChange}
          />
          <input
            className='register_inp'
            type='password'
            name='password'
            placeholder='Пароль'
            value={values.password}
            onChange={handleChange}
          />
          <input
            className='register_inp'
            type='password'
            name='password2'
            placeholder='Повторите пароль'
            value={values.password2}
            onChange={handleChange}
          />
          <button className='register_btn' onClick={handleSubmit}>Зарегистрироваться</button>
        </div>
        <div className='login_btn_block'>
          <span>Уже зарегистрированы?</span>
          <Link className='login_btn' to='/login'>Войти</Link>
        </div>
      </div>
    </div>
  );
}
