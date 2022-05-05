import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function Login() {
    const [userName, setUsername] = useState("");
    const navigate = useNavigate();

    return (
        <div>
            <h1>Login</h1>
            <div>
                <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
                <button onClick={() => navigate('/chat', {state: {userName}})}>Entrar</button>
            </div>
        </div>
    )
}