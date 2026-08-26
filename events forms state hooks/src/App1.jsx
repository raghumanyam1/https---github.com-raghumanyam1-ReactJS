import Student from "./Student.jsx";

function App() {
  return (
    <div>
      <h1>STUDENT INFORMATION</h1>

      <Student
        name="Raghu"
        age={25}
        course="React JS"
      />
      
      <Student
        name="Ram"
        age={31}
        course="java"
      />
      
      <Student
        name="Raju"
        age={28}
        course="python"
      />
      
      <Student
        name="Raghu"
        age={25}
        course="React JS"
      />
      <Student
        name="Raghu"
        age={25}
        course="React JS"
        student="ISSTUDENT"
      />
      <Student
        name="Raghu"
        age={25}
        course="React JS"
      />
    </div>
  );
}

export default App; 