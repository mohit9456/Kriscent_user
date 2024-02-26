import React from 'react'
import { toast, Toaster } from "react-hot-toast";


const ContactForm = () => {
   const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thanks For Assist us... We connect you Shortly !!");
   }

    return (
        <div className='container'>
            <Toaster toastOptions={{ duration: 4000 }} />
            <h2 className='my-5 text-center'>Feel free to Contact Us</h2>
            <form onSubmit={handleSubmit} className='mb-5' >
                <div className="mb-3">
                    <label for="formGroupExampleInput" className="form-label">Example label</label>
                    <input required type="text" className="form-control" id="formGroupExampleInput" placeholder="Joe Biden" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input required type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Write your Query</label>
                    <textarea required className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type='submit' className="btn btn-primary"> Submit your Query</button>
            </form>
        </div>
    )
}

export default ContactForm
