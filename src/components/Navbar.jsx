import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'
import Search from './Search'

export default function Navbar() {
    const [loginValue, setloginValue] = useState(true)
    const navigate = useNavigate();

    const login = localStorage.getItem('access')
    console.log(login);

    useEffect(() => {
        console.log("useEffect вызван");
        if (login && login.length > 0) {
            setloginValue(false);
        } else {
            setloginValue(true);
        }
    }, []);

    console.log(loginValue);


    const handleLogOut = () => {
        navigate('/')
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
        setloginValue(true)
    }

    return (
        <>
            <header className='navbar'>
                <Link className='logo' to='/'>DevPool</Link>
                <Search />
                <div className='nav_menu'>
                    <Link className='link_nav' to='/'>Главное</Link>
                    <Link className='link_nav' to='/turnir'>Турниры</Link>
                    <Link className='link_nav' to='/news'>Новости</Link>
                </div>
                <div className='login'>
                    {loginValue ?
                        <Link to='/register'>Войти</Link> : <button onClick={handleLogOut} type='submit' className='logout'>Выйти</button>
                    }
                </div>
            </header>
        </>
    )
}
