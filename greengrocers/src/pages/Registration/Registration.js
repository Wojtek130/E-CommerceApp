import * as React from 'react';
import "./Registration.scss";
import Input from '../../components/Input.component';

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
                // console.log(result);
                setHide(!hide);
                setMessage(result.message);
            })
    }

    return (
        <div className='form__wrapper'>
            <form className={hide ? "registration_form" : "registration_form hide"} onSubmit={handleSubmit}>
                <p className='registration_form__message'>Dear customer!<br />Please fill in the registration form.</p>
                <Input
                    className='registration_form__input'
                    className2='registration_form__label'
                    text="Username"
                    id='username'
                    type='text'
                    pattern='^[a-zA-Z0-9]*$'
                    title='Username must contain only letters and digits and no spaces'
                    value={username}
                    onChange={handleUsername} />
                <Input
                    className='registration_form__input'
                    className2='registration_form__label'
                    text="Email"
                    id='email'
                    type='email'
                    value={email}
                    onChange={handleEmail} />
                <Input
                    className='registration_form__input'
                    className2='registration_form__label'
                    text="Password"
                    id='password'
                    type='password'
                    minlength="4" 
                    title="Password min length is 4"
                    value={password}
                    onChange={handlePassword} />
                <p className='registration_form__login'>Already have an account? <a href="/login">Log in</a></p>
                <input className='registration_form__submit btn' type="submit" value="Submit" />
            </form>
            <p className={hide ? "hide" : undefined}>{message}<br /> Go to <a href="/login">login page?</a></p>
        </div>
    );
};

export default Registration;