import React from 'react'
import wel from '../../assets/images/Welcometo/wel.png'




const stats = [
  { id: 1, name: 'Couples Pared', value: '2K' },
  { id: 2, name: 'Mens', value: '1600+' },
  { id: 3, name: 'Womens', value: '2000+' },
]
function Welcometo() {



  return (
    <div className='bg-[#fefbf5]'>
      <section className="  max-w-7xl mx-auto  px-4 sm:px-6 lg:px-4 py-12">




        <div className="container px-6 py-10 mx-auto">

          <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
            <div className="lg:flex">


              <img
                className="object-cover w-full  "
                src={wel}
                alt=""
              />
            </div>
            <div className="lg:flex justify-center   text-start flex-col">
              <h1 className="object-cover w-full text-[#66451c] text-balance text-xl  lg:text-5xl  font-semibold tracking-wide ">
                WELCOME TO <span className='block text-[#e5026b] py-3'>WEDDING MATRIMONY</span>
              </h1>
              <p className='text-sm  lg:text-lg'>
                Best wedding matrimony It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                <span className='block py-7'>
                  <a href="" className='text-[#e5026b] font-semibold'>Click here </a> to Start you matrimony service now.</span>
              </p>
              <hr />
              <p className='py-7 text-sm  lg:text-lg'>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>





              



                {/* <div className="container   mx-auto">

                  <div className="grid  grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                    <div className="lg:flex">
                      veera
                      
                    </div>
                    <div className="lg:flex">
                      veera

                    </div>
                  </div>
                </div> */}
             






            </div>

          </div>
        </div>






        <div className=" py-5 sm:py-10">
      <div className="mx-auto rounded-xl   max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center  lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto   rounded my-5 flex text-yellow-900 max-w-xs flex-col p-1 sm:p-5 gap-y-4">
              <dt className="text-base/7 ">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight  sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>





      </section>
    </div>
  )
}

export default Welcometo