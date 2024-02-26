import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavTop from '../Navigation/NavTop';
import { Link } from 'react-router-dom';

const MenCollection = () => {

    const [productData, setProductData] = useState([]);
    const [category, setCategory] = useState('')

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


    return (
        <div>
            <NavTop />
            
            <h1 className='text-center mt-5 fs-1 text-decoration-underline'>Men-Collections</h1>
            <div className='container my-4 text-center'>
                <p className='fw-semibold mt-5 fs-5'>Filter by categories</p>
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="">All</option>
                    <option value="Tshirts">T-shirts</option>
                    <option value="kurtas">Kurtas</option>
                    <option value="jeans">Jeans</option>
                </select>

            </div>
            <div className=" mt-5 container d-flex flex-wrap align-items-center justify-content-center">

            {
                (productData).filter((product) => {
                    if (product.category == 'Men') {
                        return product;
                    }
                }).filter((product) => {
                    if(category == '') {
                        return product;
                    }else if(category == product.categories) {
                        return product;
                    }
                })
                .map((product) => {
                    return (
                            <Link to={`/product/${product._id}`} style={{textDecoration: 'none'}}>
                            <div class="card  m-3" style={{width: '18rem'}}>
                                <img style={{width: '100%', height: '18rem'}} class="card-img-top" src={product.image} alt="Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title">{product.name}</h5>
                                        <div className='d-flex justify-content-between align-items-center my-4'>
                                            <h4 className='text-decoration-line-through'>&#8377;{product.price}/-</h4>
                                            <button className='text-bg-dark p-2 rounded'>Add To Cart</button>
                                        </div>
                                        <h5 className='fs-4 text-center text-secondary fw-200'> 40% OFF <span className="text-decoration-line-through fs-6 text-black">  &#8377;{product.price}/-</span>   &#8377;{Math.floor(product.price * 60/100)}/-</h5>
                                    </div>
                            </div>
                            </Link>

                    )
                })
            }
                        </div>
        </div>
    )
}

export default MenCollection
