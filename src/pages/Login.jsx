import { useNavigate } from "react-router";

const Login = () => {

    const navigate = useNavigate();

    return (
        <div>
            <form>
                <h2>Login</h2>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <button onClick={() => navigate('/register')}>Register</button></p>
        </div>
    )
}

export default Login;