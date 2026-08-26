function Header({ setPage }) {
  return (
    <header>
      <h1 className="h1">My Website</h1>

      <nav className="h" >
        <button onClick={() => setPage("home")}>
          Home
        </button>

        <button onClick={() => setPage("complaint")}>
          Lodge Complaint
        </button>

        <button onClick={() => setPage("admin")}>
          Admin Portal
        </button>
      </nav>
    </header>
  );
}

export default Header;