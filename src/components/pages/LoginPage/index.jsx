import './styles.css';
import { useState} from 'react';
import {useForm} from 'react-hook-form';

export const LoginPage = () => {
    const [mode, setMode] = useState("login");

    const{register, handleSubmit } =useForm();

    const loginUser = (formVals) => {
        console.log("Login Submitted", formVals)
    }

    const signUpUser = () => {
        console.log("Sign Up Submitted")
    }

    return (
        <div className="login-page">
            <div className="login-header">
                <img src="https://assets.nfhslearn.com/uploads/course/icon_image/61063/Social_Media_2x.png" 
                alt="social-logo" className="header-logo"/>
                <h1 className="header-title">SocialHub</h1>
            </div>
            {mode === "login" && (

                <form className="form-layout" onSubmit={handleSubmit(loginUser)}>
                    <h2>Please sign in!</h2>
                    <br />

                    <label htmlFor="user">Username</label>
                    <input type="email" name="user" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />

                    <input type="submit" value="Login" />
                    <br />

                    <p>Don't have an account? Create One Now!</p>
                    <button onClick={()=> setMode("signup")}>Sign Up</button>
                </form>
            )}

            {mode === "signup" && (

            <form className="form-layout" onSubmit={handleSubmit(loginUser)}>
                <h2>Create a new account</h2>
                <br />

                <label htmlFor="user">Email</label>
                <input type="email" name="user" required />

                <label htmlFor="password">Password</label>
                <input type="password" name="password" required />

                
                <label htmlFor="passwordConfirm">Confirm Password</label>
                <input type="password" name="passwordConfirm" required />

                <input type="submit" value="Sign Up" />
                <br />

                <p>Have an account already?</p>
                <button onClick={()=> setMode("login")}>Login</button>
            </form>
            )}
        </div>
    )
}