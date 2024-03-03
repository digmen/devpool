import React, { useEffect, useState } from 'react'
import './home.css'

import hero from '../../assets/Hero.png'
import axios from 'axios'
import { BASEURl } from '../../utils/const'
import { Link } from 'react-router-dom'

export default function MainPage() {
    const [turnir, setTurnir] = useState([])

    useEffect(() => {
        async function getTurnir() {
            try {
                const response = await axios.get(`${BASEURl}tournamentslist/`);
                setTurnir(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        getTurnir(); 
    }, []);

    function getMonthName(monthNumber) {
        const months = [
            "январь", "февраль", "март", "апрель", "май", "июнь",
            "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"
        ];
        return months[monthNumber - 1];
    }
    console.log('Render home page');

    return (
        <div className='container'>
            <div className='hero'>
                <img src={hero} alt='hero' />
                <span>Участвуй в турнирах, побеждай!</span>
            </div>

            <section className='block_turnirov'>
                <h1 className='block_tur_title'>
                    Турниры
                </h1>
                <div className='block_turnir_card'>
                    {turnir.map((item) => (
                        <Link className='turnir_link' key={item.id} to={`deteils/${item.id}`}>
                            <div className='turnir_card'>
                                <img src={item.picture} alt='Undefind' />
                                <div className='text_in_card'>
                                    <ul>
                                        <li className='name_tur'>{item.name}</li>
                                        <li>
                                            <span className='data'>
                                                {`${new Date(item.date).getDate()} ${getMonthName(new Date(item.date).getMonth() + 1)} ${new Date(item.date).getFullYear()}`}
                                            </span>
                                        </li>
                                        <li className='format_tur'>Формат : {item.formatt === 'single' ? <span className='single_tur'>Одиночный</span> : <span className='team_tur'>Командный</span>}</li>
                                        <li>Призовой фонд : <span className='price_fund'>{item.price_fund} СОМ</span></li>
                                    </ul>
                                </div>
                                {/* <span>Участников {item.alreadyin}</span> */}
                                {/* <span>Цена за участия{item.price_for_participating}</span> */}
                                {/* <span>Сколько команд могут участвовать {item.teamsallowed}</span> */}
                                {/* <span>Организатор{item.whoisowner}</span> */}
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    )
}
