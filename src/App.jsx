/*
    useReducer:

    - useReducer is a React hook that is used to manage complex state logic in functional components.
    - It is an alternative to useState and is particularly useful when the state logic involves multiple sub-values or when the next state depends on the previous one.
*/

import { useReducer } from "react";

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_NAME':
            return {
                ...state,
                name: action.payload
            };
        case 'SET_EMAIL':
            return {
                ...state,
                email: action.payload
            }
        case 'SET_PASSWORD':
            return {
                ...state,
                password: action.payload
            }
    }
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, {
        name: '',
        email: '',
        password: ''
    });

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('Registering user:', state);
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <div>
                    <input
                        type="text"
                        placeholder="Name..."
                        value={state.name}
                        onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
                    />
                </div>
                <br />
                <div>
                    <input
                        type="email"
                        placeholder="Email..."
                        value={state.email}
                        onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
                    />
                </div>
                <br />
                <div>
                    <input
                        type="password"
                        placeholder="Password..."
                        value={state.password}
                        onChange={(e) => dispatch({ type: 'SET_PASSWORD', payload: e.target.value })}
                    />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default App;