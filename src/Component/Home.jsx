import React from "react";
import { FaCheck } from "react-icons/fa6";

const Home = () => {
  const security = [
    {
      icon: <FaCheck className="text-green-500 text-2xl ms-5" />,
      title: "100% Free to use",
    },
    {
      icon: <FaCheck className="text-green-500 text-2xl ms-5" />,
      title: "900+ High-Quality Products",
    },
    {
      icon: <FaCheck className="text-green-500 text-2xl ms-5" />,
      title: "Largest global print network",
    },
  ];

  return (
    <>
      <section className="">
        <div className="w-full relative top-[10rem] grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
          <div className="lg:ms-[4rem] md:ms-[2rem] xs:p-10">
            <h1 className="lg:text-6xl md:text-3xl sm:text-3xl xs:text-3xl leading-[4.5rem] font-bold text-customgrey">
              Create and sell<br/> custom products
            </h1>
            {security.map((curr, id) => (
              <div
                key={id}
                className="my-2 flex gap-2 font-bold text-customgrey"
              >
                {curr.icon}
                <p>{curr.title}</p>
              </div>
            ))}

            <div className="flex gap-2 my-10">
              <button className="w-36 bg-green-500 font-bold text-white h-[2.9rem] ">
                Start for free{" "}
              </button>
              <button className="w-36 border border-black font-bold text-customgrey h-[2.9rem] ">
                How it works?
              </button>
            </div>
          </div>

          <div className="ms-[4rem] flex justify-center">
            <div className="w-[18rem] rounded-[1rem] rotate-1 flex justify-center items-center p-4 border border-slate-200 h-80">
              <img src="https://printify.com/pfh/assets/animations/images/img_5.png" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
