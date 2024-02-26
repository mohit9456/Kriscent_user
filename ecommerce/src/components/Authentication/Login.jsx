import React, { useState } from 'react'
import './signup.css';
import { Link,useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.config';
import Layout from './Layout';
import { toast, Toaster } from "react-hot-toast";


const Login = () => {


    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                setTimeout(() => {
                    toast.success("You Logged in successfully!");
                }, 3000);
                navigate('/');
            })
            .catch((err) => {
                setTimeout(() => {
                    toast.error("Something Went Wrong Try Again Later!");
                }, 3000);
                console.log(err);
            })
    }


    return (
        <div className='container1'>
            <Toaster toastOptions={{ duration: 4000 }} />
            <div className="box-container">
                <h1>Log In</h1>
                <Layout onChange={(e) => setEmail(e.target.value)} name={"Email"} type={"email"} placeholder={"Enter email !"} />
                <Layout onChange={(e) => setPassword(e.target.value)} name={"Password"} type={"password"} placeholder={"Enter Password !"} />
                <button onClick={handleSubmit}>Log in</button>
                <div className='ac'>Don't have an Account ? <Link to='/signup' className='ac-1'>sign up</Link> </div>
            </div>
        </div>
    )
}

export default Login
