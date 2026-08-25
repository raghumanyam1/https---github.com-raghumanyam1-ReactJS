import { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <>
      <h2>Count: {count}</h2>
      <h2>Result: {result}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}

export default App;
