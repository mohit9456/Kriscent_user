import React from 'react'
import './layout.css';

const Layout = (props) => {
    return (
        <div className='box-form'>
            <label htmlFor="">{props.name}</label>
            <input type={props.type} {...props} />
        </div>
    )
}

export default Layout

