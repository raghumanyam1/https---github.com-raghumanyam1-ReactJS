import { useState } from "react";

function Complaint() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="complaint">
      <h2>Lodge a Complaint</h2>

      {submitted ? (
        <div className="success">
          <h3>Complaint Submitted Successfully!</h3>
          <p>Thank you. Your complaint has been recorded.</p>
          <button onClick={() => setSubmitted(false)}>
            Lodge Another Complaint
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            required
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Complaint Type</label>
          <select required>
            <option value="">Select complaint type</option>
            <option>Service Issue</option>
            <option>Product Issue</option>
            <option>Technical Issue</option>
            <option>Other</option>
          </select>

          <label>Complaint Description</label>
          <textarea
            placeholder="Describe your complaint"
            rows="5"
            required
          ></textarea>

          <button type="submit">
            Submit Complaint
          </button>
        </form>
      )}
    </div>
  );
}

export default Complaint;