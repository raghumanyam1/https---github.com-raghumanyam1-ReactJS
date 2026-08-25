import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "increment") {
    return { count: state.count + 1 };
  }

  if (action.type === "decrement") {
    return { count: state.count - 1 };
  }

  if (action.type === "reset") {
    return { count: 0 };
  }

  return state;
}

function Usereducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h2>Count: {state.count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>
        plus
      </button>

      <button onClick={() => dispatch({ type: "decrement" })}>
        minus
      </button>

      <button onClick={() => dispatch({type: "reset"})}>
        Reset
      </button>
    </>
  );
}

export default Usereducer;