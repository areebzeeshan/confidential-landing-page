import { createContext, useEffect, useState } from "react";
import App from "../App";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: "",
    });

    useEffect(() => {
        const data = localStorage.getItem("auth")
        if(data){
            setAuth(JSON.parse(data))
        }
    }, [])

    return <AuthContext.Provider value={[auth, setAuth]}><App /></AuthContext.Provider>
};