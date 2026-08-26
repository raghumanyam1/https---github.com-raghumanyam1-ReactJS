function Header() {

    return(
         <>
        
         <header className="header">
            <h2 style={{ color: "red", fontsize: "80px", textAlign: "end"}}>Login</h2>
            <h1 style={{ textAlign: "center", fontsize: "200px" }}>My Website</h1>
            <nav>
                <ul style ={{color: "green"}}>
                    
                    <li style={{color: "yellow" }}><a href="#" style = {{color: "#112333"}}>home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">services</a></li>
                    <li><a href="#">contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
        </>

    );
}

export default Header;
