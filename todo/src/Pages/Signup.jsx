import React, { useContext, useState } from 'react'
import { authcontext } from '../Context/Authcontext'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate=useNavigate()

    const { setAuth } = useContext(authcontext)

    const handleSignup = () => {
        const user = { email, password }
        console.log(user)
        setAuth(true)
        setEmail("")
        setPassword("")
        navigate("/todo")
    }

    return (
        <div>
            <h1>Log In</h1>
            <br />
            <br />
            <label>Email:</label>
            <input placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <br />
            <label>Password:</label>
            <input placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <br />
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    )
}

export default Signup
