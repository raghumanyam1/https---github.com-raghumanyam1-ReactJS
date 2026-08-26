import { useContext } from "react";
import UserContext from "./UserContext.jsx";

function Child() {
    const userName = useContext(UserContext);

    return (
        <div>
            <h2>Hello {userName}</h2>
        </div>
    );
}

export default Child;