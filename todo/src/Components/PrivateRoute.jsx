import React, { useContext } from 'react'
import { authcontext } from '../Context/Authcontext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {

    const { auth } = useContext(authcontext)
    if (!auth) {
        return <Navigate to={"/"} />
    }

    return children
}

export default PrivateRoute
