import * as React from 'react';
import "./Login.scss";
import Input from '../../components/Input.component';

const Login = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [message, setMessage] = React.useState('');
    const [hide, setHide] = React.useState(true);
    const responseBody = {};
    let loggedIn = message.includes("successfully");

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };
    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        responseBody.username = username;
        responseBody.password = password;
        setUsername('');
        setPassword('');
        fetch('/login', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(responseBody)
        })
            .then((response) => response.json())
            .then((result) => {
                // console.log(result);
                setHide(!hide);
                setMessage(result.message);
            })
    }

    return (
        <div className='form__wrapper'>
            <form className={hide ? "login_form" : "login_form hide"} onSubmit={handleSubmit}>
                <p className='login_form__message'>Dear customer! Log in.</p>
                <Input
                    className='login_form__input'
                    className2='login_form__label'
                    text="Username"
                    id='username'
                    type='text'
                    value={username}
                    onChange={handleUsername} />
                <Input
                    className='login_form__input'
                    className2='login_form__label'
                    text="Password"
                    id='password'
                    type='password'
                    value={password}
                    onChange={handlePassword} />
                <p className='login_form__login'>Don't have an account? <a href="/register">Register</a></p>
                <input className='login_form__submit btn' type="submit" value="Submit" />
            </form>
            <p className={hide ? "hide" : undefined}>
                {message}
                {loggedIn ?
                    <p>Go to <a href="/">home page?</a></p>
                    :
                    <a href="/login">Try again?</a>}
            </p>
        </div>
    );
};

export default Login;