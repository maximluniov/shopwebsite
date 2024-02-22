import React, { useEffect, useState, useContext } from 'react'
import { CartContext } from "../contexts/cartcontext";

const Cart = () => {

  const { increaseNumber, decreaseNumber, handletotalPrice, totalPrice } = useContext(CartContext)

  const [products, setProducts] = useState([]);


  useEffect(() => {
    setProducts(JSON.parse(localStorage.items));
  }, []);

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
    <div className='py-40 px-20 flex  gap-x-8 bg-stone-300 min-h-screen  '>
      <div>
        <h1 >Bag</h1>

        {
          products &&
          products.map((product) => (<div className='flex  w-[800px] h-60 items-center p-4 border-b bg-stone-50' key={product.id}>

            <img className='h-32 bg-inherit' src={product?.image} alt="item" />

            <div className='flex  px-10 w-full justify-between'>
              <div className='flex flex-col gap-y-16'>

                <div className='flex flex-col'>
                  <p>{product?.title}</p>
                  <p className=' text-stone-400 '>{product.category}</p>
                </div>

                <div className='flex gap-x-4 items-center'>
                  <button className='w-8 rounded-full p-2 bg-red-300 ' onClick={() => increaseCount(product)} >+</button>
                  {product.count}
                  <button className='w-8 rounded-full p-2   bg-red-200' onClick={() => reduceCount(product)}>-</button>
                  <button onClick={() => deleteProduct(product)}>Delete</button>
                </div>

              </div>

              <div className='flex'>
                {(product.count * product.price).toFixed(2)}$
              </div>

            </div>
          </div>
          ))
        }
      </div>

      <div className='fixed right-[500px]'>
        <p className='font-bold text-2xl'>Summary</p>
        <div className='bg-stone-50 w-80 h-80 p-4 gap-y-4 flex flex-col justify-between'>
          <div className='text-xl flex flex-col gap-y-2'>Do you have a promo?
            <input className='outline-none w-full border rounded-md p-2' type="text" /></div>

          <div>
            <p className='text-2xl border-b'>Total:{totalPrice.toFixed(2) + "$"}</p>
            <button className='text-3xl w-full bg-black text-white p-2 rounded-xl flex items-center justify-center '>Buy</button>
          </div>

        </div>
      </div>


    </div>
  )
}

export default Cart