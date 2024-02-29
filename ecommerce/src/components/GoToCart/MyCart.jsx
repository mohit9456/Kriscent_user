import React, { useEffect, useState } from 'react'
import NavTop from '../Navigation/NavTop'
import { toast, Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const MyCart = () => {


  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const getData = () => {
      const productdata = JSON.parse(localStorage.getItem('productData'))
      setProductData(productdata);
    }
    getData();

    console.log(productData);
  }, [])


  const cartDelete = (stock) => {
    console.log(stock);
    const arr= productData.filter((product) => product.id != stock)
    console.log(arr);
    setProductData(arr);
    localStorage.clear();
    localStorage.setItem('productData', JSON.stringify(arr));
  }

  const navigate = useNavigate();

  const handlePayment = () => {
    setTimeout(() => {
      toast.success("Payment Successful ! Your Product is On the Way");
    }, 2000);
    navigate('/');
    localStorage.clear();
  }


  return (
    <div>
      <NavTop />
      <Toaster toastOptions={{ duration: 4000 }} />
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <h2 className='text-center mt-5'>My Cart</h2>
        {productData && productData.length > 0 ?
          productData.map((item, index) => {
            return (
              <div key={index} className="container d-flex justify-content-between align-items-center my-5 shadow-lg p-3 rounded">
                <div className="h-100 w-25 d-flex">
                  <img src={item.image} alt={item.name} style={{ width: '100%', height: '40vh' }} />
                </div>
                <div className="d-flex flex-column">
                  <div>
                    <h2 className='px-2'>{item.name}</h2>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className='mx-5 fs-4'>Available Quantity: {item.stock}</p>
                    <h4 className='text-secondary fw-100 fs-2 mx-5'>&#8377;{item.price}/-</h4>
                  </div>
                </div>
                <div className="d-flex">
                  <button onClick={() => cartDelete(item.id)} className="btn btn-primary">Delete</button>
                </div>
              </div>
            )
          })
        :
        <>
          <div className="d-flex justify-content-center align-items-center" style={{height: '50vh'}}>
              <h1 className='my-5 '>Your Cart is EMPTY !!!</h1>
          </div>
          <button className='btn btn-secondary rounded mb-5 disabled'>Proceed to Payment</button>
        </>
        }
        {productData && productData.length > 0 && <button onClick={() => handlePayment()} className='btn btn-dark rounded mb-5'>Proceed to Payment</button>}
      </div>
    </div >
  )
}

export default MyCart
