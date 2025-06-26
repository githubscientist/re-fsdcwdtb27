import { useRef } from "react";

const App = () => {

    const textInputRef = useRef(null);

    const handleSubmit = () => {
        // console.log(textInputRef.current.value);
        textInputRef.current.focus();
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Type something..."
                ref={textInputRef}
            />

            <button onClick={handleSubmit}>Focus</button>
        </div>
    )
}

export default App;