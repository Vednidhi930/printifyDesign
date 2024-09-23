import React from 'react'

const Money = () => {
  return (
    <>
       <div className='w-full border-2 flex justify-center p-5'>
          <div className='lg:w-[80%] md:w-[90%] sm:w-full xs:w-[100%] text-white p-10 bg-customblack flex flex-col  rounded-xl'>
             <div>
                <h1 className='leading-[3.1rem] text-4xl font-bold'>Make Money,<br/> Risk-Free</h1>
             </div>

             <div>
                <p className='my-3'>You pay for fulfillment only when you make a <br/>sale</p>
             </div>

             <div className='lg:w-[20rem] md:w-full  sm:w-full xs:w-full font-bold bg-customeblack1 flex flex-col gap-6 rounded-xl p-10'>
                 <div className='flex justify-between'>
                    <p>You sell a t-shirt</p>
                    <p>$30</p>
                 </div>

                 <div className='flex justify-between'>
                    <p>You pay for its production</p>
                    <p>$12</p>
                 </div>
                 <hr/>

                 <div className='flex justify-between text-green-500 font-bold text-2xl'>
                    <p>Your profit</p>
                    <p className=''>$18</p>
                 </div>
             </div>
             <button className='w-28 min-w-28 h-[2.4rem] rounded-sm my-4 ms-2 text-white bg-green-500 font-bold'>Start Selling</button>
             <p className='text-customwhite ms-2 text-sm'>100% Free to use · 900+ Products · Largest print network</p>
          </div>
       </div>
    </>
  )
}

export default Money
