import React from 'react'
import { AdvertisementData } from '../data/AvertismentData.js'

const Advertisement = () => {
  return (
    <>
       <div className="">
         <div className='w-[100%] grid my-[15rem]  lg:grid-cols-3 md:grid-cols-3 xs:grid-cols-1 xs:gap-1  xs:ms-0'>

           {
            AdvertisementData.map((curr,id)=> <div key={id}  className='flex p-5 lg:ms-[6rem] gap-2 flex-col lg:items-start md:items-start sm:items-center xs:items-center  lg:gap-6 '> 
            <div className='w-32 h-32'>
               <img className='w-full' src={curr.image} />
            </div>
            <h1 className='text-2xl mr-2  font-bold text-customgrey'>{curr.utilise}</h1>
            <p className=''>{curr.description}</p>
        </div>)
           }
         </div>
       </div>
    </>
  )
}

export default Advertisement
