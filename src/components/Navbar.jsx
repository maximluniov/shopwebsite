import { CiShoppingCart } from "react-icons/ci";
import { Link, Outlet } from 'react-router-dom'
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/cartcontext";


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




  return (
    <>
      <div className='flex text-xl bg-stone-400 items-center w-full p-8  justify-between fixed l-0 t-0 shadow-2xl animated navbar z-10  '>

        <Link to="/">
          <h1 className='font-bold text-2xl '>E-COMMERCE</h1>
        </Link>

        <div className='flex gap-x-20 '>
          <Link className="enlargetext " to="clothes">Clothes</Link>
          <Link className="enlargetext " to="/electronics">Electronics</Link>
          <Link className="enlargetext " to="/jewelery">Jewelery</Link>
        </div>

        <div>
          <Link className="flex items-center gap-x-4 " to="/cart">
            <p className=""> {count !== 0 && totalPrice?.toFixed(2) + "$"} </p>
            <div className="flex items-center ">
              <CiShoppingCart size={30} />
              <p className="scaling-number">{count !== 0 && count} </p>
            </div>

          </Link>
        </div>

      </div>
      <Outlet />
    </>
  )
}

export default Navbar