import React, { useState } from 'react'
import Layout from './Layout'
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { toast, Toaster } from "react-hot-toast";


const Signup = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = () => {

        createUserWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
            console.log(res);
            const user = res.user;
            await updateProfile(user, {
                displayName : name,
            })
            setTimeout(() => {
                toast.success("Your account create successfully!");
            }, 3000);
            navigate('/')
        })
        .catch((err) => {
            setTimeout(() => {
                toast.error("Something Went Wrong Try Again Later!");
            }, 3000);
            console.log(err.message);
        });
    }


    return (
        <div className='container1'>
            <Toaster toastOptions={{ duration: 4000 }} />
                <div className="box-container">
                    <h1>Sign Up</h1>
                    <Layout onChange={(e) => setName(e.target.value)} name={"Name"} type={"text"} placeholder={"Enter your name !"} />
                    <Layout onChange={(e) => setEmail(e.target.value)} name={"Email"} type={"email"} placeholder={"Enter email !"} />
                    <Layout onChange={(e) => setPassword(e.target.value)} name={"Password"} type={"password"} placeholder={"Enter Password !"} />
                    <button onClick={handleSubmit}>Sign up</button>
                    <div className='ac'>Already have an Account ? <Link to='/login' className='ac-1'>log in</Link> </div>
                </div>
        </div>
    )
}

export default Signup
