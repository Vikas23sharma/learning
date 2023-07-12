import { createContext, useState } from "react";

let authContext = createContext()

const AuthcontextProvider = ({ children }) => {
    const [auth,setAuth]=useState(false)

    return <authContext.Provider value={{auth,setAuth}} >
        {children}
    </authContext.Provider>
}

export default AuthcontextProvider