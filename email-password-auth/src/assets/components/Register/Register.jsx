import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
const Register = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (event) => {
        console.log(event.target.value)
        setEmail(event.target.value)
    }

    const handlePasswordBlur = (event) => {
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(email, password)

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })
            .catch((error) => {
                console.log(error)
            });

    }


    return (
        <div className='w-50 mx-auto'>
            <h4>Please Register</h4>

            <form className='' onSubmit={handleSubmit} action="">

                <input onChange={handleEmailChange} className='w-50 mb-4 rounded' type="email" name='email' id='email' placeholder='Email' />

                <input onBlur={handlePasswordBlur} className='w-50 mb-4 rounded' type="password" name='password' id='password' placeholder='Password' />

                <input className='btn btn-primary' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;