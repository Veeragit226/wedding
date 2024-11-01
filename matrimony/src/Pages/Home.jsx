import React from 'react'
import Navebar from './Navebar'
import '../assets/css/home.css'
import ContNav from './ContNav'
import Temp from './Temp'
// import {motion} from 'framer-motion'
// import Logo from '../assets/images/logo-a.png'
function Home() {
  return (
    <>
      {/* nav-bar-start */}
      <ContNav />
      <Navebar />
    
      {/* nav-bar-end */}
      <div className="relative px-6 bg-img text-white  lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-40  lg:py-46">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-center ">
            <h1 className="text-balance text-2xl font-semibold tracking-wide pb-5  sm:text-4xl">
              #1 Matrimony
            </h1>
            <h1 className="text-balance text-5xl font-semibold tracking-wide pb-5  sm:text-7xl">
              Find Your
              <br />
              <span className='text-[#f00]'> Right Match </span> here
            </h1>
            <h1 className="text-balance text-5xl font-semibold tracking-tight pb-2  sm:text-7xl">
            </h1>
            <p className=" text-pretty text-lg font-medium">
              Most Trusted Matrimony Platform in the world.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
        </div>
      </div>
    </>
  )
}

export default Home