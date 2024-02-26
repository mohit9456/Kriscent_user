import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import axios from 'axios';
import { Autoplay, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { toast, Toaster } from "react-hot-toast";


const ProductCard = () => {


    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const getProductData = async () => {
            axios.get('http://localhost:5000/getusers')
                .then((user) =>
                    setProductData(user.data)
                )
                .catch((err) => console.log(err))


        }
        getProductData();
    }, []);

    const getSavedData = () => {
        let existingData = JSON.parse(localStorage.getItem('productData')) || [];
        return existingData;
    }

    const handleCart = (name, price, image, category, stock, id) => {
        let existingData = getSavedData();

        let newData = {
            name: name,
            price: Math.floor(price * 60/100),
            image: image,
            category: category,
            stock: stock,
            id: id
        };

        let updatedData = [...existingData, newData]
        localStorage.setItem('productData', JSON.stringify(updatedData));
        setTimeout(() => {
            toast.success("Product Added To Cart !!");
        }, 3000)
    }


    return (
        <div className='container mt-5'>
        <Toaster toastOptions={{ duration: 4000 }} />
            <Swiper
                slidesPerView={3}
                spaceBetween={50}
                loop={true}

                navigation={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {
                    productData.map((product, index) =>
                    (
                        <SwiperSlide key={index}>
                            <Link style={{textDecoration: 'none'}} to={`/product/${product._id}`}>
                            <div className="">
                                <div className="shadow-lg bg-body-tertiary p-3 rounded">
                                    <img style={{ width: '100%', height: '60vh' }} src={product.image} alt="" />
                                    <h5 className='text-center text-dark'>{product.name}</h5>
                                    <div className='d-flex justify-content-between m-3'>
                                        <h5 className='fs-3 text-decoration-line-through text-secondary fw-200'>&#8377; {product.price}/-</h5>
                                        <button onClick={() => handleCart(product.name, product.price, product.image, product.category, product.stock, product._id)} className='text-bg-dark p-2 rounded'>Add To Cart</button>
                                    </div>
                                    <h5 className='fs-4 text-center text-secondary fw-200'> 40% OFF <span className="text-decoration-line-through fs-6 text-black">  &#8377;{product.price}/-</span>   &#8377;{Math.floor(product.price * 60/100)}/-</h5>
                                </div>
                            </div>
                            </Link>
                        </SwiperSlide>
                    ))}

            </Swiper>
        </div>
    )
}

export default ProductCard
