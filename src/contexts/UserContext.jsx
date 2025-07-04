import { createContext, useState } from "react";

// 1. create a context to provide user data
export const AuthContext = createContext();

const UserContext = ({ children }) => {
    const [user, setUser] = useState({
        name: 'Alice',
        email: 'alice@guvi.in'
    });

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default UserContext;