import React from 'react'
import SingleProduct from './SingleProduct/SingleProduct';

const ProductList = ({products}) => {
  console.log(products);
  return (
    // Note : We Should use display : flex ,flex-wrap : wrap before mapping the products
    <div style={{display:"flex",flexWrap:"wrap"}}>                   
     {products.map((product)=>
     <SingleProduct product={product} key={product.id}/>
     )} 
    </div>
  )
}

export default ProductList
