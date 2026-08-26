import { useState } from "react";
import Header from "./components/Header.jsx";
import Complaint from "./components/Complaints.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Header setPage={setPage} />

      <main>
        {page === "home" && (
          <>
            <h1>Welcome to Resolve Now</h1>
            <p>Online Complaint Management System</p>
          </>
        )}

        {page === "complaint" && <Complaint />}

        {page === "admin" && (
          <>
            <h2>Admin Portal</h2>
            <p>Admin login will be available here.</p>
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;