import { useEffect, useState } from "react";

// Higher-Order Component (HOC) to add a loading spinner
const hocWithLoader = (WrappedComponent) => {
    return function Loader({ isLoading }) {
        return (
            <div>
                {isLoading && <h2>Loading...</h2>}
                <WrappedComponent />
            </div>
        );
    }
}

const User = () => {
    return (
        <div>
            <h1>Hello, Guest!</h1>
        </div>
    )
}

// Enhanced Component with the HOC
const WithLoader = hocWithLoader(User);

const App = () => {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a data fetching delay
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        // Cleanup the timer on component unmount
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <WithLoader
                isLoading={isLoading}
            />
        </div>
    )
}

export default App;