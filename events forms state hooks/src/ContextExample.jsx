import UserContext from "./UserContext.jsx";
import Child from "./Child.jsx";

function App() {
    const userName = "Raghu";
    
    return (
        <UserContext.Provider value={userName}>
            <h1>Context Example</h1>

            <Child />
        </UserContext.Provider>
    );
}

export default App;