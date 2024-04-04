import React from 'react'

const ProductCard = ({productData, loading}) => {
   
  return loading? <h1>Loading...</h1> : (
    <div className='mt-4 flex flex-wrap'>
        {productData.map((product)=>{
           return <div key={product.id} className=' border border-solid border-gray-200 mr-8 w-[270px] rounded-lg hover:bg-gray-200'>
            <img 
            src={product.images[0]}
            className='rounded-lg w-70 h-64'/>
            <div className='m-2 font-bold'>{product.title}</div>
            <p className='m-2'>{product.description}</p>
            <div className='m-2 font-bold'>$ {product.price}</div>
        </div>
        })} 
       
    </div>
  )
}

export default ProductCard;