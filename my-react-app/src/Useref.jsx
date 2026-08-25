import { useRef } from "react";

function UseRefExample1() {
  const inputRef = useRef();

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <h2>Example 1</h2>

      <input ref={inputRef} />

      <button onClick={handleClick}>
        Focus Input
      </button>
    </>
  );
}

export default UseRefExample1;