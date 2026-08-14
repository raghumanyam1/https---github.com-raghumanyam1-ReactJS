import { userState} from "react";
 
function FromExample() {
    const [name, setName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        alert("Hello" + name);
    }

    return (
        <div>
            <h1>Student Form</h1>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>

                <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)} />
 
                <button type="submit">
                    submit
                </button>

        


            </form>
        </div>
    );

}

export default FormExample;