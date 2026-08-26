function Sidebar({showMessage}) {
    return (
        <aside className = "sidebar">
            <h2>components</h2>
            <ul>
                <li><button onClick = {() => showMessage("Functional Component")}>functional</button></li>
                <li><button onClick = {() => showMessage("Parent Component")}>parent</button></li>
                <li><button onClick = {() => showMessage("Child Component")}>child</button></li>
                <li><button onClick = {() => showMessage("Reusable Component")}>reusable</button></li>
            </ul>
        </aside>
    );
}

export default Sidebar