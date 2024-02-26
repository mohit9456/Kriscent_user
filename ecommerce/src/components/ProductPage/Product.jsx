import React, { useEffect, useState } from 'react'
import NavTop from '../Navigation/NavTop'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { toast, Toaster } from "react-hot-toast";

const Product = () => {
    const { id } = useParams();
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


    const pro = productData.filter((product) => product._id == id)

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
            toast.success("Product Added To Cart !!");
    }

    return (
        <div>
            <NavTop />
            <Toaster toastOptions={{ duration: 4000 }} />
            {pro ?
                pro.map((product) => (
                    <div className='container d-flex mt-5 bg-light shadow-lg rounded justify-content-between' style={{ height: '70vh' }}>
                        <div>
                            <img style={{ width: '35vw', height: '100%' }} src={product.image} alt={product.name} />
                        </div>
                        <div className='px-5 mt-4 d-flex flex-column align-items-center' >
                            <h2 className='text-center mb-4'>{product.name}</h2>
                            <h5 className='mt-5 shadow-lg bg-secondary p-3 text-light rounded fs-6'>
                                <h5 className='text-decoration-underline'>Product Description : </h5>
                                {product.description} .
                            </h5>
                            <div style={{ width: '90%' }} className='d-flex justify-content-between align-items-center mt-5'>
                                <h5 className='text-secondary fs-1 fw-bold'>
                                    Price: <span className='text-decoration-line-through fs-5'>&#8377; {product.price}/-</span> <span>&#8377;{Math.floor(product.price * 60 / 100)}/-</span>
                                </h5>
                                <button onClick={() => handleCart(product.name, product.price, product.image, product.category, product.stock, product._id)} className='btn btn-dark'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))
                :
                <div>
                    <h4>Loading...</h4>
                </div>
            }
        </div>
    )
}

export default Product
