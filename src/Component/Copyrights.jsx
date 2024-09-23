import React from "react";
import { copyrightdata } from "../data/data.js";

const Copyrights = () => {
  return (
    <>
      <footer>
        <div className="w-full border-2 p-6 bg-slate-200 flex flex-col  items-center justify-center">
          <div className="lg:w-[50%] md:w-full sm:w-full xs:w-full flex  justify-evenly ">
            {copyrightdata.map((curr, id) => (
              <a key={id}>{curr.name}</a>
            ))}
          </div>
          <h1>© 2024 Printify, Inc. All rights reserved.</h1>
        </div>
      </footer>
    </>
  );
};

export default Copyrights;
