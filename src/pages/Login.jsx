import { useNavigate } from "react-router";

const Login = () => {

    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();

        navigate('/dashboard');
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <button onClick={() => navigate('/register')}>Register</button></p>
        </div>
    )
}

export default Login;