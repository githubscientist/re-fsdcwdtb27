import { useNavigate } from "react-router";

const Description = () => {

    const navigate = useNavigate();

    return (
        <div>
            <p>Welcome to our Website! Please Register or Login to continue.</p>
            <button onClick={() => navigate('/register')}>Register</button>
            &nbsp;
            <button onClick={() => navigate('/login')}>Login</button>
        </div>
    )
}

export default Description;