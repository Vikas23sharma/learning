import React, { useState } from 'react'

const Login = () => {

    const [Name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useState(false)

    const handleLogin = () => {
        if (email == "admin@example.com" && password == "admin123") {
            alert("Login Successful")
            setAuth(true)
        }
        else {
            alert("Wrong Credentials")
        }
        let user = { auth, Name, email, password }
        localStorage.setItem("user", JSON.stringify(user))
    }
    return (
        <div style={{ marginTop: "5%" }}>
            <label>Name</label>
            <input type="text" placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
            <label>Email</label>
            <input type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login
