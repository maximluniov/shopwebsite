import React, { useState, useContext } from 'react'
import { CartContext } from "../contexts/cartcontext";
import { FaTrash } from "react-icons/fa";
const Cart = () => {

  const { increaseNumber, decreaseNumber, handletotalPrice, totalPrice } = useContext(CartContext)

  const [products, setProducts] = useState(JSON.parse(localStorage.items));

  const reduceCount = (product) => {
    if (product.count !== 1) {
      product.count--;
      const index = products.indexOf(product);
      const deletedProducts = products.toSpliced(index, 1);
      setProducts([...deletedProducts, product]);
      decreaseNumber();
      localStorage.items = JSON.stringify([...deletedProducts, product]);
      handletotalPrice(product.price, false);
    }
    else {
      deleteProduct(product);
    }

  }

  const increaseCount = (product) => {
    product.count++;
    const index = products.indexOf(product);
    const deletedProducts = products.toSpliced(index, 1);
    setProducts([...deletedProducts, product]);
    increaseNumber()
    localStorage.items = JSON.stringify([...deletedProducts, product]);
    handletotalPrice(product.price, true);
  }

  const deleteProduct = (product) => {
    const index = products.indexOf(product);
    setProducts(products.toSpliced(index, 1));
    localStorage.items = JSON.stringify(products.toSpliced(index, 1));
    handletotalPrice(product.price * product.count, false);

    for (let i = 0; i < product.count; i++) { decreaseNumber(); }
  }


  return (
    <div className='pt-40  pb-10 px-10 flex  justify-around gap-y-8 gap-x-8 bg-stone-300 h-screen  text-xl'>

      <div className=' w-full overflow-y-auto cartproducts  rounded-md border shadow-lg  bg-white p-2'>
        {
          products.length ?
            products.sort((a, b) => {
              return a.title.localeCompare(b.title);
            }).map((product) => (<div className='flex  w-full h-60 items-center p-4 border-b bg-stone-50' key={product.id}>

              <img className='h-32 bg-inherit' src={product?.image} alt="item" />

              <div className='flex  px-10 w-full justify-between'>
                <div className='flex flex-col gap-y-16 w-full'>

                  <div className='flex flex-col'>
                    <p>{product?.title}</p>
                    <p className=' text-stone-400 '>{product.category}</p>
                  </div>

                  <div className='flex justify-between items-center w-full'>
                    <div className='flex gap-x-6 items-center w-full'>
                      <div className='flex items-center gap-x-4'>
                        <button className='w-10 font-bold text-2xl rounded-full p-1 bg-red-300 ' onClick={() => increaseCount(product)} >+</button>
                        {product.count}
                        <button className='w-10 font-bold text-2xl rounded-full p-1   bg-red-200' onClick={() => reduceCount(product)}>-</button>
                      </div>


                      <button onClick={() => deleteProduct(product)}><FaTrash size={25} /></button>
                    </div>


                    <div className='flex items-end'>
                      {(product.count * product.price).toFixed(2)}$
                    </div>
                  </div>

                </div>



              </div>
            </div>
            )) : <div className='flex items-center justify-center w-full h-full'>Your cart is empty now</div>
        }

      </div>

      <div className='w-80'>
        <p className='font-bold text-2xl '>Summary</p>
        <div className='bg-stone-50 w-80 h-80 p-4 gap-y-4 flex flex-col justify-between shadow-lg rounded-md sm:w-full'>
          <div className='text-xl flex flex-col gap-y-2  '>Do you have a promo?
            <input className='outline-none w-full border border-gray-400 rounded-md p-2' type="text" placeholder='Type here' />
          </div>


          <div>
            {products.length > 0 &&
              <div>
                <p className='text-gray-400'>Delivery: 2$</p>
                <p className='text-gray-400'>Taxes: 4$</p>
              </div>}
            <p className='text-2xl border-b'> {totalPrice !== 0 && "Total:" + (totalPrice + 6).toFixed(2) + "$"}</p>
            <button className='text-3xl w-full bg-black text-white p-2 rounded-xl flex items-center justify-center '>Buy</button>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Cart