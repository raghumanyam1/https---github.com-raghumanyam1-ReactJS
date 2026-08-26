import { usestate } from "react";

function App() {
  
  return (
    <>
      <h1
        style={{
          color: "red",
          fontSize: "80px",
          textAlign: "center"
        }}
      >
        Hello React
      </h1>

      <button
        style={{
          backgroundColor: "red",
          color: "white",
          fontSize: "20px",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          margin: "10px",
          cursor: "pointer"
        }}
      >
        Login
      </button>
    </>
  );
}

export default App;