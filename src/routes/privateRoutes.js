import React from 'react'
import Home from '../components/home';
import About from '../components/about';
import Main from '../components/main';
import { Route, Routes } from 'react-router-dom';

function PrivateRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>
    )
}

export default PrivateRoutes