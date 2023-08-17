import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../Redux/authreducer/action'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const handleLogin = () => {
    const userDetails = { email, password }
    console.log(userDetails)
    dispatch(login(userDetails))
    setEmail("")
    setPassword("")
  }

  return (
    <div>
      <input type="email" value={email} placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
      <br />
      <br />
      <input type="password" value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
      <br />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
