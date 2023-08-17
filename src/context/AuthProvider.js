import { createContext, useState, useEffect } from "react";
import Cookies from 'js-cookie';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({});
    useEffect(() => {
        const accessToken = Cookies.get('accessToken');
        const userId = Cookies.get('userId');
        const user = Cookies.get('user');
        const email = Cookies.get('email');
        const roles = Cookies.get('roles');
    
        setAuth({ userId, user, email, roles, accessToken });
      }, []);
    
    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    );
}
export default AuthContext;