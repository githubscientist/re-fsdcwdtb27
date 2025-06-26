/*
    uncontrolled component:

    - a component that does not manage its own state.

    controlled component: 

    - a component that manages its own state.
*/

import { useState } from "react";
import './App.css';

const App = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const style = { fontSize: '24px' };

    const handleRegister = (event) => {
        event.preventDefault();

        console.log('Registering user!');
        console.log('Email:', email);
        console.log('Password:', password);
    }

    return (
        <form onSubmit={handleRegister}>
            <h1>Register</h1>
            <input
                type="email"
                placeholder="Email..."
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-4xl"
            // style={style}
            />

            <input
                type="password"
                placeholder="Password..."
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Register</button>
        </form>
    )
}

export default App;