import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';


interface Value {
    authenticated: boolean;
    loading: boolean;
    handleLogin: any;
    handleLogout: any;
}


const AuthContext = createContext<Value>({authenticated: false, loading:true, handleLogin:null, handleLogout:null});

function AuthProvider(props: { children: React.ReactNode; }) {

    const [authenticated, setAuthenticated] = useState<boolean>(false);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            api.defaults.headers.authorization = `Bearer ${JSON.parse(token)}`
            setAuthenticated(true)
        }
        setLoading(false)

    }, [])


    async function handleLogin(email: string, password: string) {
        const { data } = await api.post('/user/auth', { email, password })
        if(!data.token){
            return
        }
        localStorage.setItem('token', JSON.stringify(data.token));
        api.defaults.headers.authorization = `Bearer ${data.token}`;
        setAuthenticated(true);
        console.log(data)
    }

    function handleLogout(){
        setAuthenticated(false);
        localStorage.removeItem('token');
        api.defaults.headers.authorization = undefined;
    }

    if(loading){
        return <h3>Carregando...</h3>
    }


    return (
        <AuthContext.Provider value={{ authenticated, loading, handleLogin, handleLogout }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }