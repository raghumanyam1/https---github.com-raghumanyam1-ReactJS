//here we're combining Event + state
import { useState } from "react";

function Event() {

  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counter</h1>

      <h2>Count: {count}</h2>

      <button onClick={increase}>
        Increase
      </button>
    </div>
  );
}

export default Event;