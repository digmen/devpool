import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BASEURl } from '../../utils/const';

import './deteil.css'
import TurnirPage from '../turnir/TurnirPage';

export default function DeteilsTurnir() {
    let { turnirId } = useParams();
    const [turnirID, setTurnirID] = useState([])

    useEffect(() => {
        async function getTurnir() {
            try {
                const response = await axios.get(`${BASEURl}tournaments/${turnirId}/`);
                setTurnirID(response.data)
            } catch (error) {
                console.log(error);
            }
        }

        getTurnir();
    }, []);
    console.log('Render deteil page');
    console.log(turnirID);
    return (
        <div className='container'>
            <div className='deteils'>
                <img src={turnirID.picture} alt='picture' />
                <div>
                    <span>{turnirID.name}</span>
                </div>
            </div>
        </div>
    )
}
