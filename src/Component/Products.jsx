import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const Products = () => {
  return (
    <>
      <section>
        <div className="w-[100%] xs:w-[100%] flex justify-center items-center p-20 relative bg-slate-100">
          <div className="lg:w-[100%] lg:h-[29rem] md:w-[100%] sm:w-[500px] xs:w-[500px]   rounded-2xl lg:flex lg:flex-row  md:flex-col  justify-center items-end  p-10 bg-white">

          <div className="lg:w-96 lg:h-[35rem] md:w-full xs:w-[100%] xs:h-[15rem] lg:relative lg:right-[10rem] lg:top-[2.3rem]  flex justify-center items-center bg-green-500  rounded-xl">
            <img
              className="lg:w-[74%] md:w-[50%] md:rotate-90 xs:w-[70%] xs:rotate-90 sm:rotate-90 lg:rotate-0"
              src="https://printify.com/pfh/media/clothes-CMPWJ6JG.webp"
            />
          </div>


            <div className="lg:w-[30rem] md:w-[30rem] xs:w-[300px] sm:w-[300px]  p-5 flex flex-col gap-6">
              <h1 className="lg:text-2xl md:text-2xl sm:text-xl font-bold text-customgrey">
                Easily add your design to a wide range of products
              </h1>
              <p>
                With our free design tools, you can easily add your custom
                designs to t-shirts, mugs, phone cases, and hundreds of other
                products.
              </p>
              <div className="flex items-center gap-2 ">
                <a className="text-green-500 text-xl xs:text-sm font-bold">All products</a>
                <FaArrowRight className="text-green-500 mt-2 text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
