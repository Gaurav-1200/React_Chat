import React from 'react'
import Button from '@material-ui/core/Button';
import './login.css';
import { auth, provider } from './firebase';
function Login() {
    const signIn =() =>{
        auth.signInWithPopup(provider).then(result =>
            console.log(result)
            ).catch((error) =>alert(error.message));

    };
    return (
        <div className="login">
           
            <div className="login_container">
                <img src="https://st.depositphotos.com/1695366/1398/v/950/depositphotos_13982448-stock-illustration-cartoon-talk-to-the-hand.jpg"/>
                <div className="login_text">
                    <h1> Sign in to Chatter</h1>
                </div>
                <Button onClick={signIn}>
                    Sign in with Google
                 </Button>

            </div>
        </div>
    )
}

export default Login
