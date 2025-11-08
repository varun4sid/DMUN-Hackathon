import React, { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [activeUser, setActiveUser] = useState(null);
    return (
        <UserContext.Provider value={{ activeUser, setActiveUser }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}
