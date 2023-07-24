import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Login from '../Pages/Login'
import Todo from '../Pages/Todo'
import Signup from '../Pages/Signup'
import PrivateRoute from './PrivateRoute'

const Allroutes = () => {

    return <Routes>
        {/* <Route path='/' element={<Login />}></Route> */}
        <Route path='/' element={<Signup />}></Route>
        <Route path='/todo' element={<PrivateRoute><Todo /></PrivateRoute>}></Route>
    </Routes>

}

export default Allroutes
