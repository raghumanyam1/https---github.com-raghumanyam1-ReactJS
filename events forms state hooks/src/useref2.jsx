import { useRef, useState } from "react";

function UseRefExample2() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  function handleClick() {
    countRef.current++;
    console.log(countRef.current);

    setCount(count + 1);
  }

  return (
    <>
      <h2>Example 2</h2>

      <h3>State Count: {count}</h3>

      <button onClick={handleClick}>
        Click Me
      </button>
    </>
  );
}

export default UseRefExample2;