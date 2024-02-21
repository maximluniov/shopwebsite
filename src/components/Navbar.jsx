import { CiShoppingCart } from "react-icons/ci";
import { Link ,Outlet} from 'react-router-dom'


const Navbar = () => {
  return (
    <>
      <div className='flex bg-stone-400 w-full p-8 gap-x-40 justify-between fixed l-0 t-0 shadow-xl animated'>

        <Link to="/">
          <h1 className='font-bold text-2xl'>E-COMMERCE</h1>
        </Link>

        <div className='flex gap-x-20'>
          <Link to="clothes">Clothes</Link>
          <Link to="/electronics">Electronics</Link>
          <Link to="/jewelery">Jewelery</Link>
        </div>

        <div>
          <Link to="/cart">
            <CiShoppingCart size={30} />
          </Link>
        </div>

      </div>
      <Outlet />
    </>
  )
}

export default Navbar