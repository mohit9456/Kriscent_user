import React from 'react'

const Footer = () => {
    return (
        <div className="bg-black shadow-lg text-light">
            <div className="container">
                <footer className="py-5">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <div className='d-flex flex-column'>
                                <p className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Home</a></p>
                                <p className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Features</a></p>
                                <p className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Pricing</a></p>
                                <p className="nav-item mb-2"><a href="#" className="nav-link p-0 ">FAQs</a></p>
                                <p className="nav-item mb-2"><a href="#" className="nav-link p-0 ">About</a></p>
                            </div>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <div className='d-flex flex-column'>
                                <p className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Home</a></p>
                                <p className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Features</a></p>
                                <p className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Pricing</a></p>
                                <p className="nav-item mb-2"><a href="#" className="nav-link p-0 ">FAQs</a></p>
                                <p className="nav-item mb-2"><a href="#" className="nav-link p-0 ">About</a></p>
                            </div>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <div className='d-flex flex-column'>
                                <p className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Home</a></p>
                                <p className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Features</a></p>
                                <p className="nav-item mb-2"><a href="#" className="nav-link p-0 ">Pricing</a></p>
                                <p className="nav-item mb-2"><a href="#" className="nav-link p-0 ">FAQs</a></p>
                                <p className="nav-item mb-2"><a href="#" className="nav-link p-0 ">About</a></p>
                            </div>
                        </div>

                        <div className="col-md-5 offset-md-1 mb-3">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label for="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" fdprocessedid="ghbdkl" />
                                    <button className="btn btn-primary" type="button" fdprocessedid="3wy">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>© 2024 Company, Inc. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer
