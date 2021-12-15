import './styles.css';
import {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';



export const LoginPage = () => {
    const history = useHistory('');
    const [mode, setMode] = useState("login");

    const{register, handleSubmit } = useForm();

    const loginUser = async(formVals) => {

        try {
            console.log("Login Submitted", formVals);
            const auth = getAuth();
            const loginUser = await signInWithEmailAndPassword(auth, formVals.user, formVals.password);
            history.push("/");
        } catch(error) {
            console.log("Error connecting to firebase", error)
        }
      }
    


    const signUpUser = async(formVals) => {
        console.log("Sign Up Submitted", formVals)
        const auth = getAuth();
        try {
            const signUpUser = await createUserWithEmailAndPassword(auth, formVals.user, formVals.password);
            console.log("New user was created", signUpUser);
            history.push("/");
        }catch(error) {
            //handle inccorect password here
            console.log("Error from firebase", error)
        }
        
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
                    <input type="email" name="user" required {...register('user')}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required  {...register('password')} />

                    <input type="submit" value="Login" />
                    <br />

                    <p>Don't have an account? Create One Now!</p>
                    <button onClick={()=> setMode("signup")}>Sign Up</button>
                </form>
            )}

            {mode === "signup" && (

            <form className="form-layout" onSubmit={handleSubmit(signUpUser)}>
                <h2>Create a new account</h2>
                <br />

                <label htmlFor="user">Email</label>
                <input type="email" name="user" required  {...register('user')}/>

                <label htmlFor="password">Password</label>
                <input type="password" name="password" required  {...register('password')}/>

                
                <label htmlFor="passwordConfirm">Confirm Password</label>
                <input type="password" name="passwordConfirm" required  {...register('passwordConfirm')}/>

                <input type="submit" value="Sign Up" />
                <br />

                <p>Have an account already?</p>
                <button onClick={()=> setMode("login")}>Login</button>
            </form>
            )}
        </div>
    )
}