import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "username") {
    return {
      ...state,
      username: action.value
    };
  }

  if (action.type === "password") {
    return {
      ...state,
      password: action.value
    };
  }

  if (action.type === "reset") {
    return {
      username: "",
      password: ""
    };
  }

  return state;
}

function Usereducer2() {
  const [state, dispatch] = useReducer(reducer, {
    username: "",
    password: ""
  });

  return (
    <>
      <h2>Login Form</h2>

      <input
        type="text"
        placeholder="Enter username"
        value={state.username}
        onChange={(e) =>
          dispatch({
            type: "username",
            value: e.target.value
          })
        }
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter password"
        value={state.password}
        onChange={(e) =>
          dispatch({
            type: "password",
            value: e.target.value
          })
        }
      />

      <br /><br />

      <button onClick={() => alert(`Welcome ${state.username}`)}>
        Login
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>

      <h3>Username: {state.username}</h3>
      <h3>Password: {state.password}</h3>
    </>
  );
}

export default Usereducer2;