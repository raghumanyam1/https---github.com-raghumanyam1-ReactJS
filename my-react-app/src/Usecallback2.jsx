import { useState, useCallback } from "react";

function App() {
  const [message, setMessage] = useState("");

  const showMessage = useCallback(() => {
    setMessage("Hello Raghu!");
  }, []);

   const reload = useCallback(() => {
    setMessage("");
  }, []);

  return (
    <>
      <h2>useCallback</h2>

      <button onClick={showMessage}>
        Click Me
      </button>
      <button onClick={reload}>
        reset
      </button>

      <h3>{message}</h3>
    </>
  );
}

export default App;