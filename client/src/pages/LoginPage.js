import { useState } from "react"


export default function LoginPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <form action=" " className="login">
            <h1>Login</h1>
            <input type="text" placeholder="username" value={username} onChange={ev => setUsername(ev.target.value)}/>
            <input type="password" placeholder="password"/>
            <button>Login</button>
        </form>
    )
}