import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from '../../utils/getImgUrl';

import { Link } from 'react-router'

import { Swiper, SwiperSlide } from 'swiper/react';

import {useDispatch} from 'react-redux'

import {addToCart} from '../../redux/features/cart/cartSlice'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

const BookCard = ({book}) => {

  const dispatch = useDispatch();

  const handleAddToCart = (product)=>{
    dispatch(addToCart(product))
  }
   
  return (
    <div >
        <div className='flex items-center mb-4 hover:shadow-lg rounded-md p-1'>

            <div className='sm:h-72 sm:flex-shrink-0 border rounded-md'>
            <Link to={`/books/${book._id}`}>
                <img className='w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200'
                src={`${getImgUrl(book?.coverImage)}`}
                />
                </Link>
            </div>

            <div className='px-3 py-4'>
              
              <Link to={`/books/${book._id}`}>
                <h3 className='mb-3 font-semibold text-lg'>{book?.title}</h3>
            </Link>
                <p className='mb-5 text-gray-600'>{book?.description.length > 80 ? `${book.description.slice(0,80)}...`:book?.description}</p>

                <p className='font-medium mb-5'>$ {book?.newPrice}  <span className='font-normal ml-1 line-through'>$ {book?.oldPrice}</span></p>

                <button onClick={()=> handleAddToCart(book)} className='md:my-5 my-5 bg-yellow-300 md:px-2 px-6 md:py-2 py-2 rounded-lg border border-yellow-700 hover:bg-amber-500 flex items-center gap-2'> <FiShoppingCart /> Add to Cart</button>
               
            </div>
       </div>
    </div>
  )
}

export default BookCard
