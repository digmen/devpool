import React from 'react'
import MainLayouts from '../layouts/MainLayouts'
import MainPage from '../pages/home/MainPage'
import { Route, Routes } from 'react-router-dom'
import TurnirPage from '../pages/turnir/TurnirPage'
import NewsPage from '../pages/news/NewsPage'
import CreateTurnirPage from '../pages/createturnir/CreateTurnirPage'
import DeteilsTurnir from '../pages/deteils/DeteilsTurnir'
import RegisterPage from '../pages/login/RegisterPage'
import LoginPage from '../pages/login/LoginPage'

export default function MainRoutes() {
    return (
        <Routes>
            <Route element={<MainLayouts />}>
                <Route path="/" element={<MainPage />} />
                <Route path='/turnir' element={<TurnirPage />} />
                <Route path='/news' element={<NewsPage />} />
                <Route path='/create_turnir' element={<CreateTurnirPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path="/deteils/:turnirId" element={<DeteilsTurnir />} />
            </Route>
        </Routes>
    )
}
