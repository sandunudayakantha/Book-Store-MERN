import React, { useEffect, useState } from 'react'

const categories=["Choose a genre","Business","Fiction","Horror","Adeventure"]


const TopSellers = () => {

    const [books,setBooks]=useState([])

    useEffect(()=>{
        fetch("books.json")
        .then(res=>res.json())
        .then((data)=>console.log(data))
    },[]

    )


  return (
    <div>
      <h1>Top sellers</h1>

      <div>
        <select name='category' id='category'>
            {
                categories.map((category,index)=>(
                    <option key={index} value={category}>
                            {category}
                    </option>

                ))
            }
        </select>
      </div>  

    </div>
  )
}

export default TopSellers
