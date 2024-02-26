import React from 'react'

const Testimonials = () => {
    return (
        <div>
            <h2 className='mt-5 text-center text-decoration-underline'>Clients Testimonials</h2>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner bg-secondary container p-5 rounded mt-5 mb-5">
                    <div className="carousel-item active">
                        <p className='text-light fw-semibold fs-5 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia consectetur minima deserunt ipsum inventore quo suscipit voluptatibus rem! Fugiat autem impedit sequi assumenda?</p>
                    </div>
                    <div className="carousel-item">
                        <p className='text-light fw-semibold fs-5 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia consectetur minima deserunt ipsum inventore quo suscipit voluptatibus rem! Fugiat autem impedit sequi assumenda?</p>
                    </div>
                    <div className="carousel-item">
                        <p className='text-light fw-semibold fs-5 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia consectetur minima deserunt ipsum inventore quo suscipit voluptatibus rem! Fugiat autem impedit sequi assumenda?</p>
                    </div>
                </div>
                <button className="carousel-control-prev mx-3" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next mx-3" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}

export default Testimonials
