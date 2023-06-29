export default function RegisterPage(){
    const [username, setUsername] = setState('');
    const [password, setPassword] = setState('');

    function register(ev){
        ev.preventDefault();
        fetch('http://localhost:4000', {
            method: 'POST',
            body: JSON.stringify({username, password})
        })
    }

    return(
        <form action=" " className="register" onSubmit={}>
            <h1>Register</h1>
            <input type="text" 
            placeholder="username" 
            value={username} 
            onChange={ev => setUsername(ev.target.value)}
            />
            <input type="password" 
            placeholder="password"
            value={password}
            onChange={ev => setPassword(ev.target.value)}
            />
            <button>Register</button>
        </form>
    )
}