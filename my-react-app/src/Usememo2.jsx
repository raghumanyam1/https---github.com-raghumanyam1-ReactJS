import { useState, useMemo } from "react";

function App() {
  const [result, setResult] = useState(10);

  const doubledResult = useMemo(() => {
    return result * 2;
  }, [result]);

  return (
    <>
      <h2>Result: {result}</h2>
      <h2>Result * 2: {doubledResult}</h2>

      <button onClick={() => setResult(result + 1)}>
        Increase
      </button>
    </>
  );
}

export default App;