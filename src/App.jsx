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
    }
}

const App = () => {

    const [state, dispatch] = useReducer(reducer, {
        name: '',
        email: '',
        password: ''
    });

    console.log(state);

    return (
        <div>
            <h1>Register</h1>
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
                />
            </div>
            <br />
            <div>
                <input
                    type="password"
                    placeholder="Password..."
                />
            </div>
            <br />
            <button type="submit">Submit</button>
        </div>
    )
}

export default App;