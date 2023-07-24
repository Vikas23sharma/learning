import { createContext, useState } from "react";

export const authcontext = createContext()

const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState(false)

    return <authcontext.Provider value={{ auth, setAuth}}>
        {children}
    </authcontext.Provider>
}

export default AuthContextProvider