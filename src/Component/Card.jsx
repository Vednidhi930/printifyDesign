import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

const Card = (review) => {
  const { image, testimonial, name } = review;

  return (
    <>
      <div>
        <div className="w-full p-20  xs:flex xs:justify-center">
          {/* card section */}
          <div className="lg:w-[30rem] md:w-[30rem]  sm:w-[30rem] xs:w-[30rem]  p-4 rounded-lg bg-white">
            <div className="flex my-2 gap-3">
              <div className="w-20 p-2">
                <img className="w-full h-16 rounded-lg" src={image} />
              </div>

              <div className="my-2">
                <h1 className="text-2xl font-bold">{name}</h1>
                <a className="text-green-400 text-lg">Store Link</a>
                <div className="text-orange-400 flex text-2xl">
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                  <TiStarFullOutline />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-96 p-2 me-2">
                <p>{testimonial}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
