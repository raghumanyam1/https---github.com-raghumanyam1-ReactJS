import { useState } from "react";

function NameExample() {

  const [name, setName] = useState("");

  return (
    <div>
      <h1>Hello {name}</h1>

      <button onClick={() => setName("Raghu")}>
        Set Name
      </button>
    </div>
  );
}

export default NameExample;