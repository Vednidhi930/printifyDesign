import React from 'react'
import { footerData1 , footerData2 , footerData3 , footerData4 } from "../data/data.js"

const Footer2 = () => {
  return (
    <>
      <footer>
         <div className='w-full my-10 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 text-center'>
           <div className='flex flex-col items-start p-16  gap-4'>
               <h1 className='font-bold'>Integrations</h1>
               {
                footerData1.map((curr,id)=><a className='text-start'>{curr.name}</a>)
               }
           </div>

           <div className='flex flex-col items-start p-16  gap-4'>
               <h1 className='font-bold'>Discover</h1>
               {
                footerData2.map((curr,id)=><a className='text-start'>{curr.name}</a>)
               }
           </div>

           <div className='flex flex-col items-start p-16  gap-4 '>
               <h1 className='font-bold'>Start selling</h1>
               {
                footerData3.map((curr,id)=><a className='text-start'>{curr.name}</a>)
               }
           </div>

           <div className='flex flex-col items-start p-16   gap-4 '>
               <h1 className='font-bold'>Printify</h1>
               {
                footerData4.map((curr,id)=><a className='text-start'>{curr.name}</a>)
               }
           </div>
         </div>
      </footer>
    </>
  )
}

export default Footer2
