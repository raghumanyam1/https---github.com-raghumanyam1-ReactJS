import { useState } from "react";

function NameExample() {

  const [name, setName] = useState("");

  return (
    <div>
      <h1>Hello {name}</h1>
      <input
      value={name}
      onChange={(event) => setName(event.target.value)}
      />

      <button onClick={() => setName("Raghu")}>
        Set Name
      </button>
    </div>
  );
}

export default NameExample;