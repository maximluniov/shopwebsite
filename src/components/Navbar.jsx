import { CiShoppingCart } from "react-icons/ci";
import { Link, Outlet } from 'react-router-dom'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/cartcontext";

import Dropdown from "./Dropdown";


const Navbar = () => {

  const { number, totalPrice } = useContext(CartContext)


  const [count, setCount] = useState(number);

  useEffect(() => {
    setCount(number)
    const element = document.querySelector('.scaling-number');
    element.classList.add('scale-up');
    setTimeout(() => {
      element.classList.remove('scale-up');
    }, 300);

  }, [number])



  // text-xl bg-stone-400 items-center w-full p-8  justify-between fixed l-0 t-0 shadow-2xl animated navbar z-10  
  return (
    <>
      <div className='flex p-8 justify-between items-center bg-stone-400  fixed l-0 navbar t-0 z-10 shadow-2xl w-full  animated   '>

        <Link to="/">
          <h1 className='text-6xl font-bold lg:text-3xl'>E-COMMERCE</h1>
        </Link>

        <div className=' hidden lg:flex gap-x-20 lg:text-xl'>
          <Link className="enlargetext" to="clothes">Clothes</Link>
          <Link className="enlargetext" to="/electronics">Electronics</Link>
          <Link className="enlargetext" to="/jewelery">Jewelery</Link>
        </div>

        <div className="flex gap-x-8 items-center">
          <Link className="flex items-center gap-x-4 text-5xl lg:text-2xl" to="/cart">
            <p className="hidden"> {count !== 0 && totalPrice?.toFixed(2) + "$"} </p>
            <div className="flex items-center ">
              <CiShoppingCart size={ window.screen.width <= 1024 ? 80 : 30} />
              <p className="scaling-number">{count !== 0 && count} </p>
            </div>

          </Link>
          <Dropdown />
        </div>
        

      </div>
      <Outlet />
    </>
  )
}

export default Navbar