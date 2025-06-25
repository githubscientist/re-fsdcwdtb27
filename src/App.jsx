const App = () => {

    // uncontrolled component
    // using a form to handle registration
    const handleRegister = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

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
            />

            <input
                type="password"
                placeholder="Password..."
                name="password"
            />

            <button type="submit">Register</button>
        </form>
    )
}

export default App;