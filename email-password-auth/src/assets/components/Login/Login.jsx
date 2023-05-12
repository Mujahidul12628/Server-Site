import { getAuth, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom'

const auth = getAuth(app)
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password)

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const loggedUser = result.user;
                setSuccess("User Login Successful")
                setError('')
                sendVerificationEmail(result.user)
                if (!loggedUser.emailVerified) { /* empty */ }
            })
            .catch(error => {
                setError(error.message);
                setSuccess("")
            })

    };
    const sendVerificationEmail = (user) => {
        sendEmailVerification(user)
            .then(result => {
                console.log(result)
                alert('Verify your email')
            })
    }


    return (
        <div>
            <h4>Please Login</h4>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', margin: '0 auto' }}>
                <label>
                    Username:
                    <input type="email" name='email' value={username} onChange={(e) => setUsername(e.target.value)} required />
                </label>
                <label>
                    Password:
                    <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <button className='btn btn-primary my-3' type="submit">Log In</button>
            </form>
            <p><small>Have not registered yet? Please <Link to="/register">Register</Link></small></p>
            <p className='text-danger'>{error} </p>
            <p className='text-success'>{success} </p>
        </div>
    );
}

export default Login;
