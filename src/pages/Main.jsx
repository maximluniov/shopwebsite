
import { Products } from '../components/Products';

import img from "../assets/img.png"

const Main = () => {




    return (
        <div className='flex flex-col bg-stone-300 '>


            <div className='hidden md:hidden lg:flex  w-full  h-screen bg-cover bg-blend-multiply bg-white 
            items-center justify-center font-bold font-serif text-4xl bg-no-repeat ' style={{ backgroundImage: `url(${img})` }} >
                E-COMMERCE
            </div>

            <Products type=""></Products>

        </div>
    )
}

export default Main