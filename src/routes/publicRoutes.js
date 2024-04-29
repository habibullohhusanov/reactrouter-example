import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../components/main'
import Login from '../components/login'

function PublicRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}

export default PublicRoutes