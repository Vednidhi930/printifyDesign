import React from 'react'

const ServicesCard = (curr,id) => {
  return (
    <>
      <div key={id} className="p-3 ms-5 flex flex-col sm:items-center xs:items-center  justify-center">
              <div className="w-32 ">
                <img className="w-full ms-3" src={curr.image} />
              </div>
              <h1 className="text-green-500 ms-4 font-bold text-2xl">
                {curr.service}
              </h1>
              <h2 className="text-customgrey ms-4 text-2xl font-bold">
                {curr.heading}
              </h2>
              <p className="ms-4 my-5">{curr.description}</p>
            </div>
    </>
  )
}

export default ServicesCard
