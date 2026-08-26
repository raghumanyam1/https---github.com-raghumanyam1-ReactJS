import { useRef } from "react";

function App() {
    const inputRef = useRef();

    function handleFocus() {
        inputRef.current.focus();
    }

    return (
        <div>
            <h1>useRef Example</h1>

            <input 
            ref={inputRef}
            type="text"
            placeholder="Enter your name"
            />

            <button onClick={handleFocus}>
                Focus Input
            </button>
        </div>
    );
}

export default App;