import React, { useState} from 'react'
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom'
import { IoMdArrowDropright } from "react-icons/io";
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

const Dropdown = () => {


    const [isOpen, setIsOpen] = useState(false);
 
    return (
       <>
       {!isOpen &&
                <button className='relative lg:hidden' onClick={() => setIsOpen(prev => !prev)} > <LuMenu size={80} /> </button> 
                }
        
            

            {isOpen &&
                <>
                    <div className='flex fixed left-0 top-0 h-screen w-full bg-gray-300 opacity-80'></div>

                    <ClickAwayListener   onClickAway={()=>setIsOpen(false)}>
                <div className='flex flex-col fixed top-0 right-0 w-2/3 bg-white p-8 gap-y-8 shadow-xl h-screen dropdown'>
                    <button className='relative flex justify-end' onClick={() => setIsOpen(prev => !prev)} ><IoMdClose size={80} /></button>
                    <Link onClick={() => setIsOpen(prev => !prev)}  className=" flex text-5xl" to="clothes">Clothes <IoMdArrowDropright/>  </Link>
                    <Link onClick={() => setIsOpen(prev => !prev)}  className=" flex text-5xl" to="/electronics">Electronics <IoMdArrowDropright/></Link>
                    <Link onClick={() => setIsOpen(prev => !prev)} className=" flex text-5xl" to="/jewelery">Jewelery <IoMdArrowDropright/></Link>
                    {/* enlargetext */}
                </div>
                </ClickAwayListener>
                </>
                
                 

                
                }

        
        </>
       
    )
}

export default Dropdown