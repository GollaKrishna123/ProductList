import React from 'react'
import './SingleProduct.css'
const SingleProduct = ({product}) => {
    console.log(product);
  return (
    <div className="product-card">
        <img className="product-card-image" src={product.image} />
        <h3 className="product-card-title">{product.title}</h3>
        <h3 className="product-card-price">${product.price}</h3>
    </div>
  )
}

export default SingleProduct
