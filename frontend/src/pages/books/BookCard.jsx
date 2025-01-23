import React from 'react'
import { FiShoppingCart } from "react-icons/fi";

const BookCard = ({book}) => {
  return (
    <div>
        <div className='flex items-center'>

            <div>img</div>

            <div className='px-3 py-4'>
              
                <h3 className='mb-3 font-semibold text-lg'>Title</h3>

                <p className='mb-5 text-gray-600'>Discription</p>

                <p className='font-medium mb-5'>Price  <span className='font-normal ml-1 line-through'>old price</span></p>

                <button className='my-5 bg-yellow-300 px-12 py-2 rounded-lg border border-yellow-700 hover:bg-amber-500 flex items-center gap-2'> <FiShoppingCart /> Add to Cart</button>
               
            </div>
       </div>
    </div>
  )
}

export default BookCard
