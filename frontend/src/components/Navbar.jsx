import React from 'react'
import { Link } from 'react-router'
import { FaBars } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5"
import { FaRegUser } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className=' max-w-screen-2xl mx-auto md:px-40 py-6 px-5' >
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                
                <div className='pr-9'><Link to="/"><FaBars /></Link></div>
                <div className='relative' >
                    
                    <IoSearchOutline className='absolute inline-block left-2 top-1 size-6' />
                <input className='bg-gray-200 rounded w-full px-10 py-1 focus:outline-none' type='text' placeholder='Search here'/>
                </div>
            
            </div>
        
        
        
        <div className='flex items-center md:space-x-3 space-x-1 mx-3'>
        <FaRegUser className='size-6' />
        <button>
            <FaRegHeart className='md:size-6 size-6 hidden md:block' />
        </button>

        <Link to="/cart" className='bg-yellow-300 flex items-center md:px-6 py-1 px-2 gap-3 rounded'>
        <IoCartOutline className='size-6' />
        <span>0</span>

        </Link>
        
        </div>
      

        </div>
      
    </div>
  )
}

export default Navbar