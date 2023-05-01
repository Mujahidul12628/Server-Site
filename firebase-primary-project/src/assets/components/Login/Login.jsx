import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider

    const handleGoogleSignIn = () => {
        console.log("Google added")
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser)
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }
    const handleGithubSignIn = () => {
        console.log("Google added")
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser)
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }
    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(result => {

                console.log(result);
                setUser(null)
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    return (
        <div>
            {
                user ?
                    <button onClick={handleGoogleSignOut}>Google Logout</button> :
                    <>
                        <button onClick={handleGoogleSignIn}>Google Login</button>
                        <button onClick={handleGithubSignIn}>Github Login</button>
                    </>
            }

            {
                user && <div>
                    <img src={user.photoURL} alt="" />
                    <h4>User: {user.displayName} </h4>
                    <p>Email: {user.email} </p>
                </div>
            }
        </div>
    );
};

export default Login;