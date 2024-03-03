import React from 'react'
import './search.css'

export default function Search() {
    return (
        <div className='searct'>
            <form className='search_form'>
                <input className='search_inp' placeholder='Найди свой турнир' type='text' />
                <button className='search_btn' type='submit'>Поиск</button>
            </form>
        </div>
    )
}
