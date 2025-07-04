import { createContext, useContext, useState } from "react";

// 1. create a context to provide user data
const AuthContext = createContext();

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

// 2. create a custom hook to use the context
export const useAuth = () => useContext(AuthContext);