import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import "./Login.css"
import "../styles/Login.css"
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import google from '../Images/google.png'
import UserToken from '../../Shared/UserToken';


const Login = () => {
    const [activeUser] = useAuthState(auth)
    const [showpass, setpass] = useState(false)
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        HookError,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [userInfo, setUserInfo] = useState({ email: '', password: '' })
    const [error, setError] = useState({ email: '', password: '' })
    const [token]  = UserToken(user || googleUser) 
    const forEmail = (event) => {
        const invalidEmail = event.target.value;
        if (/\S+@\S+\.\S+/.test(invalidEmail)) {
            setUserInfo({ ...userInfo, email: invalidEmail })
            setError({ ...error, email: '' })
        } else {
            setError({ ...error, email: "This email is not valid" })
            setUserInfo({ ...userInfo, email: '' })
            return
        }
    }
    const forPassword = (event) => {
        if (/.{7,}/.test(event.target.value)) {
            setUserInfo({ ...userInfo, password: event.target.value })
            setError({ ...error, password: '' })
        }
        else {
            setError({ ...error, password: "Minimum 7 characters" })
            setUserInfo({ ...userInfo, password: '' })
            return
        }
    }

    const handleEmail = (event) => {
        event.preventDefault()
        const Email = event.target.email.value
        const password = event.target.password.value
        signInWithEmailAndPassword(Email, password)
    }
    const forResetPassword = async () => {
        if (userInfo.email) {
            await sendPasswordResetEmail(userInfo.email);
            toast("Password Reset successfully")
        }

        else {
            return toast("Must be need Email")
        }

    }
    if (loading) {
        <p>Loading</p>
    }
    if (token) {
        navigate(from)
    }

    useEffect(() => {
        if (HookError) {
            switch (HookError?.code) {
                case "auth/wrong-password":
                    toast("Wrong Password")
                    break;
                case "auth/invalid-email":
                    toast("Invalid Email")
                    break;
                case "auth/user-not-found":
                    toast("User Not Found")
                    break
                default:
                    toast("someting went wrong")
            }
        }
    }, [HookError])

    return (
        <>
         {/* <ScrollToTop smooth /> */}
        <div className='addForm' data-aos="zoom-out">
            
            <div className="login-container animate__animated wow animate__zoomIn">
                <div className="login-title text-white">LOGIN</div>
                <form onSubmit={handleEmail} className="login-form">
                    <input type="email" name='email' placeholder="Your Email" onChange={forEmail} />
                    {error.email && <p className='error-message'>{error.email}</p>}
                    <div className="inputPass">
                        <input className='inputPass' type={showpass ? "text" : "password"} name='password' placeholder="password" onChange={forPassword} />
                        <p onClick={() => setpass(!showpass)}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 key" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd" />
                        </svg></p>
                    </div>
                    {error.password && <p className='error-message'>{error.password}</p>}
                    <a className='forgotPass text-white' onClick={forResetPassword} >Forgot Password</a>
                    <button className='updatebtn'>Login</button>
                    <p className='text-white'>Don't have an account? <Link className='text-white' to="/signup">Sign up</Link> </p>
                </form>
                <div className="or">
                    <div className="right"></div>
                    <div className="middle text-white">or</div>
                    <div className="left"></div>
                </div>
                <button className='updatebtn' onClick={() => signInWithGoogle()}>
                    <div className="googleSection">
                        <div className="image">
                            <img className='google' src={google} alt="" />
                        </div>
                        <div className="title">
                            Google
                        </div>
                    </div>
                </button>
            </div>
        </div></>
    );
};

export default Login;