import React from "react";
import { services } from "../data/Services.js";
import ServicesCard from "./ServicesCard.jsx";

const Service = () => {
 
  return (
    <>
      <div>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-3 sm:grid-col-1 xs:grid-cols-1  p-10 bg-slate-100">

          {services.map((curr, id) => (
            <ServicesCard key={id} curr={id} {...curr} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
