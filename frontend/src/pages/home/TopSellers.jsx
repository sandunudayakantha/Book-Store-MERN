import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard'

const categories=["Choose a genre","Business","Fiction","Horror","Adventure"]


const TopSellers = () => {

    const [books,setBooks]=useState([])

    const [selectedCategory,setSelectedCategory]=useState("Choose a genre")

    useEffect(()=>{
        fetch("books.json")
        .then(res=>res.json())
        .then((data)=>setBooks(data))
    },[])

    const filteredBooks = selectedCategory === "Choose a genre" ? books:books.filter(book => book.category === selectedCategory.toLowerCase ())

    console.log(filteredBooks)


  return (
    <div className='py-6'>
      <h1 className='text-3xl font-semibold mb-6'>Top sellers</h1>

      <div className='mb-8 flex items-center'>
        <select 

            onChange={(e)=>setSelectedCategory(e.target.value)}
        
        name='category' id='category' className='border bg-gray-200 border-gray-700 rounded-md py-1 px-2 focus:none'>
            {
                categories.map((category,index)=>(
                    <option key={index} value={category}>
                            {category}
                    </option>

                ))
            }
        </select>
      </div>

      {
        filteredBooks.map((book,index) =>(
            
            <BookCard key={index} book={book}/>
        )

        )
      }
        
    </div>
    
  )
}

export default TopSellers
