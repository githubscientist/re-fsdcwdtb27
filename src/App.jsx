/*
    uncontrolled component:

    - a component that does not manage its own state.

    controlled component: 

    - a component that manages its own state.
*/

import { useState } from "react";

const App = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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