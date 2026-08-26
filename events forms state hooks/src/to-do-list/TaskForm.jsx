import { useState } from "react";

function TaskForm() {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(" saved " + text);
    setText("");
  }

  return (
    
      <form onSubmit={handleSubmit}>
        <label>task:</label>
        <input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    
  );
}

export default TaskForm;