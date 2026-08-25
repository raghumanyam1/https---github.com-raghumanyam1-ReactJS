import { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const sayHello = useCallback(() => {
    console.log("Hello");
  }, []);

  return (
    <>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={sayHello}>
        Say Hello
      </button>
    </>
  );
}

export default App;