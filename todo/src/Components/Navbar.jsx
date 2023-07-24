import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
      {/* <Link to={"/"}>Log In</Link> */}
      <Link to={"/"}>Log In</Link>
      <Link to={"/todo"}>Todo</Link>
    </div>
  )
}

export default Navbar
