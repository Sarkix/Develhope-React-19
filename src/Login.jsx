import React, { useState } from "react";

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRememberChange = (event) => {
        setRemember(event.target.checked);
    };

    const handleLoginClick = () => {
        onLogin({ username, password, remember });
    };

    const isButtonDisabled = !username || !password;

    return (
        <div>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                />
            </label>
            <label>
                Password:{" "}
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
            </label>
            <label>
                Remember me:{" "}
                <input
                    type="checkbox"
                    value={remember}
                    onChange={handleRememberChange}
                />
            </label>
            <button onClick={handleLoginClick} disabled={isButtonDisabled}>
                Click to login
            </button>
        </div>
    );
}

export default Login;
