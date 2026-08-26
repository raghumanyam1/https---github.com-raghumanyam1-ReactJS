import { useState, useEffect } from "react";

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        //console.log("useEffect is running");
    //},[]);

       console.log("Count changed:", count);
    }, [count]);

    return (
        <div>
            <h1>UseEffect Example</h1>

            <h2>Count: {count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </div>
    );   
}


export default App;