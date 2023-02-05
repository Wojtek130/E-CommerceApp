import * as React from 'react';
import "./Registration.scss";

const Registration = () => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [hide, setHide] = React.useState(true);
    const responseBody = {};

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };
    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        responseBody.username = username;
        responseBody.email = email;
        responseBody.password = password;
        setUsername('');
        setEmail('');
        setPassword('');
        fetch('/register', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(responseBody)
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setHide(!hide);
                setMessage(result.message);
            })
    }

    return (
        <div className='form__wrapper'>
            <form className={hide ? "registration_form" : "registration_form hide"} onSubmit={handleSubmit}>
                <p className='registration_form__message'>Dear customer!<br/>Please fill in the registration form.</p>
                <div>
                    <label className='registration_form__label' htmlFor="username">Username</label>
                    <input
                        className='registration_form__input'
                        id="username"
                        type="text"
                        value={username}
                        onChange={handleUsername}
                    />
                </div>
                <div>
                    <label className='registration_form__label' htmlFor="email">Email</label>
                    <input
                        className='registration_form__input'
                        id="email"
                        type="text"
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <div>
                    <label className='registration_form__label' htmlFor="password">Password</label>
                    <input
                        className='registration_form__input'
                        id="password"
                        type="password"
                        value={password}
                        onChange={handlePassword}
                    />
                </div>
                <p className='registration_form__login'>Already have an account? <a href="/login">Login</a></p>
                <input className='registration_form__submit' type="submit" value="Submit" />
            </form>
            <p className={hide ? "hide" : undefined}>{message}. <br/> Go to <a href="/login">login page?</a></p>
        </div>
    );
};

export default Registration;