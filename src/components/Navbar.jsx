import { CiShoppingCart } from "react-icons/ci";
import { Link, Outlet } from 'react-router-dom'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/cartcontext";


const Navbar = () => {

  const { number, totalPrice } = useContext(CartContext)


  const [count, setCount] = useState(number);

  useEffect(() => { setCount(number) }, [number])




  return (
    <>
      <div className='flex bg-stone-400 w-full p-8 gap-x-40 justify-between fixed l-0 t-0 shadow-2xl animated'>

        <Link to="/">
          <h1 className='font-bold text-2xl'>E-COMMERCE</h1>
        </Link>

        <div className='flex gap-x-20'>
          <Link to="clothes">Clothes</Link>
          <Link to="/electronics">Electronics</Link>
          <Link to="/jewelery">Jewelery</Link>
        </div>

        <div>
          <Link className="flex items-center gap-x-4" to="/cart">


            <p> {count !== 0 && totalPrice?.toFixed(2) + "$"} </p>
            <div className="flex items-center ">
            <CiShoppingCart size={30} />
              <p >{count !== 0 && count} </p>
             </div>

          </Link>
        </div>

      </div>
      <Outlet />
    </>
  )
}

export default Navbar