import React from 'react'
import bannerImg from "../../assets/banner.png"

const Banner = () => {
  return (
    <div className='flex flex-col  justify-between items-center md:mx-28 md:flex-row-reverse'>

    <div className='md:w-1/2 w-full md:justify-end flex mb-9'>
      <img src={bannerImg} alt="" />
      </div>        

      <div className='md:w-1/2 w-full'>
        <h1 className='md:text-5xl font-medium text-2xl mb-5' >New Releases This Week</h1>
        <p>It's time to update your reading list with some of the latest and greatest releases in the literary world. From heart-pumping thrillers to captivating memoirs, this week's new releases offer something for everyone</p>

        <button className='my-5 bg-yellow-300 px-4 py-2 rounded-3xl border border-yellow-700 hover:bg-amber-500'>Subscribe</button>
      </div>

        

      
    </div>
  )
}

export default Banner
