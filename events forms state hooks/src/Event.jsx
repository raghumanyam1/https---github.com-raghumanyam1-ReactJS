function Event() {

  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <div>
      <h2>React Events</h2>

      <button onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
}

export default Event;