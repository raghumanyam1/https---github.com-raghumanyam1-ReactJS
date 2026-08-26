import { useState} from "react";
 
function FormExample() {
    const [name, setName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        alert("Hello " + name);
    }

    return (
        <div>
            <h1>Student Form</h1>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>

                <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)} 
                />
 
                <button type="submit">
                    Submit
                </button>

        


            </form>
        </div>
    );

}

export default FormExample;