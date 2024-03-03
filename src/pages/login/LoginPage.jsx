import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { BASEURl } from '../../utils/const';

export default function LoginPage() {
    const [values, setValues] = useState({
        email: '',
        password: '',
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
            const response = await axios.post(`${BASEURl}login/`, values);
            console.log(response);
            if (response.status >= 200 && response.status <= 300) {
                localStorage.setItem('access', response.data.access)
                localStorage.setItem('refresh', response.data.refresh)
                navigate('/')
            }
        } catch (error) {
            alert('Не верные данные')
        }
    };
    return (
        <div className='container'>
            <div className='register_block'>
                <h1>ВХОД В АККАУНТ</h1>
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
                        type='password'
                        name='password'
                        placeholder='Пароль'
                        value={values.password}
                        onChange={handleChange}
                    />

                    <button className='register_btn' onClick={handleSubmit}>Войти</button>
                </div>
                <span>Еще не зарегистрированы?</span>
                <Link className='login_btn' to='/register'>Зарегистрироваться</Link>
            </div>
        </div>
    )
}
