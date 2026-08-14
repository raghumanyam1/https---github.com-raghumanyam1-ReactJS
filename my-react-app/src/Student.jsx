function Student({ name, age, course, isStudent }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}
export default Student; 