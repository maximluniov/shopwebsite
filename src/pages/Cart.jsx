import React, { useState, useContext } from 'react'
import { CartContext } from "../contexts/cartcontext";
import { FaTrash } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";
import { CiCircleMinus } from "react-icons/ci";
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
    <div className='pt-40  pb-10 px-10 flex flex-col gap-y-20 min-h-screen bg-stone-300  '>

      <div className='h-fit rounded-md border shadow-lg bg-stone-50  p-2 '>
        {
          products.length ?
            products.sort((a, b) => {
              return a.title.localeCompare(b.title);
            }).map((product) => (<div className='flex  w-full  items-center p-4 border-b bg-stone-50 text-4xl lg:text-xl ' key={product.id}>

              <img className='h-32 bg-inherit' src={product?.image} alt="item" />

              <div className='flex  px-10 w-full justify-between'>
                <div className='flex flex-col gap-y-16 w-full'>

                  <div className='flex flex-col'>
                    <p>{product?.title}</p>
                    <p className=' text-stone-400 '>{product.category}</p>
                  </div>

                  <div className='flex justify-between items-center w-full'>
                    <div className='flex gap-x-6 items-center w-full'>
                      <div className='flex items-center gap-x-4 text-5xl lg:text-xl'>
                        <button className='rounded-full ' onClick={() => increaseCount(product)} ><GoPlusCircle size={window.screen.width <= 1024 ? 80 : 35} /></button>
                        {product.count}
                        <button className='rounded-full' onClick={() => reduceCount(product)}><CiCircleMinus size={window.screen.width <= 1024 ? 80 : 30} /></button>
                      </div>


                      <button onClick={() => deleteProduct(product)}><FaTrash size={window.screen.width <= 1024 ? 60 : 25} /></button>
                    </div>


                    <div className='flex items-end'>
                      {(product.count * product.price).toFixed(2)}$
                    </div>
                  </div>

                </div>



              </div>
            </div>
            )) : <div className='flex items-center justify-center w-full h-full text-3xl lg:h-40 '>There are no items in your bag.</div>
        }

      </div>

      {products.length > 0 &&
        <div className='w-full text-6xl lg:text-xl'>
          <p className='font-bold  '>Summary</p>
          <div className='bg-stone-50 w-80  p-4 gap-y-8 flex flex-col justify-between shadow-lg rounded-md sm:w-full'>
            <div className=' flex flex-col gap-y-2  '>Do you have a promo?
              <input className='outline-none w-full border border-gray-400 rounded-md p-2 lg:w-2/3' type="text" placeholder='Type here' />
            </div>


            <div className='lg:flex lg:flex-col lg:gap-y-4'>
              {products.length > 0 &&
                <div>
                  <p className='text-gray-400'>Delivery: 2$</p>
                  <p className='text-gray-400'>Taxes: 4$</p>
                </div>}
              <p className=' border-b '> {totalPrice !== 0 && "Total:" + (totalPrice + 6).toFixed(2) + "$"}</p>
              <div className='flex w-full justify-end'>
                <button className='text-3xl w-full bg-black text-white px-2 py-8 rounded-xl flex items-center justify-center lg:py-2 lg:w-1/6 '>Buy</button>
              </div>

            </div>

          </div>
        </div>


      }



    </div>
  )
}

export default Cart