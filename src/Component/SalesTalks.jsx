import React from "react";

const SalesTalks = () => {
  return (
    <>
      <div>
        <div className="w-full flex justify-center my-5">
          <div className="md:w-[90%] lg:w-[60%] xs:w-[90%]  lg:h-[7.5rem] md:h-[5.5rem] xs:h-[4rem] bg-green-100 rounded-xl flex gap-10 justify-between items-center ">
            <div className=" w-[60%]  flex items-center h-[9rem] ">
            <h1 className="lg:text-2xl md:text-2xl xs:text-[0.62rem] lg:text-nowrap md:text-nowrap xs:text-wrap ms-5 font-bold text-green-700">
              Are you a large business looking <br /> for custom solutions?
            </h1>
            </div>
            <img
              className="md:w-[17rem] lg:w-[23rem] xs:w-[12rem] rounded-xl"
              src="https://printify.com/pfh/media/talk-to-sales-N2GDBAGC.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesTalks;
