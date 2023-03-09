import React from 'react'

const Popular = () => {
  return (
    <>
      <div id='popular' className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-screen-md mx-auto py-16 px-6">
        <div className="md:col-span-3 text-center mb-6 md:mb-0">
          <h1 className='font-dancing_script font-semibold text-xl text-primary'>The Best Food</h1>
          <h2 className='font-lora text-title text-4xl'>Popular Dishes</h2>
        </div>
        <div className="md:col-span-1 mx-auto w-64 md:w-56 shadow-xl rounded-lg bg-body-color-alt md:my-12 text-center group relative">
          <img className='w-60 md:w-52 -translate-y-4 group-hover:-translate-y-6 transition mx-auto' src="../src/assets/img/popular-onigiri.png" alt="" />
          <h3 className='font-lora font-semibold text-title text-lg'>Onigiri</h3>
          <p className='font-poppins text-sm text-txt'>Japanese Dish</p>
          <p className='font-poppins text-lg text-primary mt-3 mb-6'>$10.99</p>
          <i class="ri-shopping-bag-line absolute right-5 bottom-6 text-white rounded-full bg-primary px-2 py-1 shadow hover:scale-105"></i>
        </div>
        <div className="md:col-span-1 mx-auto w-64 md:w-56 shadow-xl rounded-lg bg-body-color-alt md:my-12 text-center group relative">
          <img className='w-60 md:w-52 -translate-y-4 group-hover:-translate-y-6 transition mx-auto' src="../src/assets/img/popular-spring-rols.png" alt="" />
          <h3 className='font-lora font-semibold text-title text-lg'>Spring Rolls</h3>
          <p className='font-poppins text-sm text-txt'>Japanese Dish</p>
          <p className='font-poppins text-lg text-primary mt-3 mb-6'>$15.99</p>
          <i class="ri-shopping-bag-line absolute right-5 bottom-6 text-white rounded-full bg-primary px-2 py-1 shadow hover:scale-105"></i>
        </div>
        <div className="md:col-span-1 mx-auto w-64 md:w-56 shadow-xl rounded-lg bg-body-color-alt md:my-12 text-center group relative">
          <img className='w-60 md:w-52 -translate-y-4 group-hover:-translate-y-6 transition mx-auto' src="../src/assets/img/popular-sushi-rolls.png" alt="" />
          <h3 className='font-lora font-semibold text-title text-lg'>Sushi Rolls</h3>
          <p className='font-poppins text-sm text-txt'>Japanese Dish</p>
          <p className='font-poppins text-lg text-primary mt-3 mb-6'>$19.99</p>
          <i class="ri-shopping-bag-line absolute right-5 bottom-6 text-white rounded-full bg-primary px-2 py-1 shadow hover:scale-105"></i>
        </div>
      </div>
    </>
  )
}

export default Popular