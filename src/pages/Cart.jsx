import React, { useEffect, useState } from 'react'

const Cart = () => {

  console.log(JSON.parse(localStorage.items))

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.items));
  }, []);


  return (
    <div className='pt-20'>
      {
        products &&
        products.map((product,index) => (<div className='flex flex-col w-[400px] h-72 items-center p-4  bg-white' key={index}>
          <p>{product?.title}</p>
          <img className='h-32 bg-inherit' src={product?.image} alt="item" />
          <div className='flex w-full h-full items-end justify-end'>
           
          </div>
          {/* <p>{product?.category}</p> */}
        </div>))
      }
    </div>
  )
}

export default Cart