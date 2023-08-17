import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'

const Allroutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        </Routes>
    )
}

export default Allroutes
