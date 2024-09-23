import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({handleIsNotActive}) => {
  const dropdowns = [
    {
      name: "Services",
      icon: <FaAngleDown />,
    },
    {
      name: "Use Cases",
      icon: <FaAngleDown />,
    },
    {
      name: "Need help ?",
      icon: <FaAngleDown />,
    },
  ];

  return (
    <>
      <div className="w-[17rem]  bg-white h-full z-20 fixed">
        <h1 className="text-center p-1 text-2xl font-bold">Menu</h1>
        <hr />
        <div className="ms-3 text-lg font-bold my-4 p-4 flex flex-col  gap-4">
          <h1 className="">Catalog</h1>
          <div className="flex justify-between  items-center ">
            <h1>How it Works</h1>
            <FaAngleDown />
          </div>

          <h1 className="">Pricing</h1>
          <h1 className="">Blog</h1>

          {dropdowns.map((curr, id) => (
            <div key={id} className="flex justify-between items-center ">
              <h1>{curr.name}</h1>
              {curr.icon}
            </div>
          ))}

          <IoMdClose onClick={handleIsNotActive} className="absolute top-0 right-0 my-2 text-2xl"/>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
