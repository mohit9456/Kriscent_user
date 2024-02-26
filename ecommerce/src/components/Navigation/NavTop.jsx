import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase.config';
import { useEffect, useState } from 'react';
import { toast, Toaster } from "react-hot-toast";

const NavTop = () => {

    const [userName, setUserName] = useState('')


    useEffect(() => {

        auth.onAuthStateChanged((user) => {
            if (user) {
                setUserName(user.displayName);
            }
            else {
                setUserName('');
            }
        })
    }, [])


    const handleLogout = () => {
        auth.signOut();
        setTimeout(() => {
            toast.error("Your account has been Logged out!");
        }, 3000);
        setUserName('');
    }

    return (
        <div className='bg-secondary shadow-lg position-sticky top-0' style={{ width: '100%', height: '100px', zIndex: 10 }}>
            <Toaster toastOptions={{ duration: 4000 }} />
            <div className="container d-flex justify-content-between align-items-center">
                <div>
                </div>
                <div className='d-flex'>
                    
                        {
                            userName ?
                                <div className='d-flex flex-row'>
                                    <p className='text-light fw-bold mt-4 fs-3 text-decoration-underline' style={{marginRight: '20px' }}>{userName}</p>
                                    <p onClick={() => handleLogout()} className='text-bg-danger text-light rounded p-2 mt-4' style={{ cursor: 'pointer', marginRight: '20px' }}>Log Out</p>
                                </div>
                                :
                                <Link to='/login' style={{ textDecoration: 'none' }}><p className='text-bg-primary text-light rounded p-2 mt-4' style={{ cursor: 'pointer', marginRight: '20px' }}>Login</p></Link>
                        }
                    
                    <Link to='/mycart' style={{textDecoration: 'none'}}><p className='text-bg-dark text-light rounded p-2 mt-4' style={{ cursor: 'pointer' }}>Go To Cart</p></Link>
                </div>
            </div>
        </div>
    )
}

export default NavTop
