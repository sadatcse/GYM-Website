import React, { createContext } from 'react';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const test = "Minhaj"
    const globalData = {
        test,
    }
    return (
        <AuthContext.Provider value={globalData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;