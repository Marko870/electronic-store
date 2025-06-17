import React, { useState } from 'react'

const Reviews = ({toggleU,setToggleU}) => {
  return (
    <section className=''>
      
          { (toggleU === "R") && (<div className='p-5 border-gray-400'>
              <h3 className='mb-3 text-2xl text-gray-700'>Add A Review</h3>
              <p className='text-lg text-gray-700'>Your email address will not be published. Required fields are marked *</p>
              <form action="" className='mt-5'>
                  <h3 className='mb-3 text-xl font-semibold text-gray-800'>Your Review</h3>
                  <textarea type="text" className='w-full h-20 p-2 border focus:outline-none' required/>
                  <div className='flex justify-center gap-4 mt-5'>
                      <div className='flex-1'>
                        <h3 className='mb-3 text-xl font-semibold text-gray-800'>Name</h3>
                        <input type="text" className='w-full h-10 p-2 border focus:outline-none' required />
                      </div>
                      <div className='flex-1'>
                        <h3 className='mb-3 text-xl font-semibold text-gray-800'>Email</h3>
                        <input type="email"  className='w-full h-10 p-2 border focus:outline-none' required/>
                      </div>
                  </div>
                  <button className='px-10 py-3 text-xl font-semibold text-white hover:bg-main-blue mt-7 bg-blue-950'>Submit</button>
              </form>
          </div>)}
    </section>
  )
}

export default Reviews
