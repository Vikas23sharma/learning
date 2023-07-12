import React from 'react'

const PrivateRoute = ({children}) => {

  let users=JSON.parse(localStorage.getItem("users"))
  
  return children
}

export default PrivateRoute
