import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaCaretUp } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import { workElements ,usesCases , NeedHelp , serviceElements } from "../data/DropdownElements.js";
import Logo from "./Logo";


const Navbar = ({handleIsActive}) => {
  const [isHovered, setIsHovered] = useState(null);
  const [dropdown,setDropdown]=useState(null)

  const MouseEnter = (id) => {
    setIsHovered(id)
    setDropdown(id)
  };

  const MouseLeave = () => {
    setIsHovered(null);
    setDropdown(null)
  };



  const dropdowns = [
    {
      name: "Services",
      icon: isHovered === 0 ? <FaCaretUp /> : <FaCaretDown />,
    },
    {
      name: "Use Cases",
      icon: isHovered === 1 ? <FaCaretUp /> : <FaCaretDown />,
    },
    {
      name: "Need help ?",
      icon: isHovered === 2 ? <FaCaretUp /> : <FaCaretDown />,
    },
  ];


  return (
    <>
      <nav>
        <div className="lg:w-[100%]  bg-white fixed z-10 md:w-[100%] shadow-lg sm:w-[100%] xs:w-[100%]  flex items-center h-[5rem]">
          <div className="flex items-center">
            <div className="md:flex  sm:flex xs:flex items-center justify-center lg:hidden">
              <IoReorderThreeOutline onClick={handleIsActive} className="text-4xl  text-green-500" />
            </div>
            <Logo />
          </div>

          <div className="w-[60%] h-[3rem] ms-8   cursor-pointer text-customgrey lg:flex items-center justify-between font-sans text-[1.02rem]">
            <div className="lg:flex items-center gap-6 justify-between md:hidden sm:hidden xs:hidden">
              <a className="hover:text-green-500">Catalog</a>
              <div
                className="flex items-center h-[5rem] flex-wrap hover:text-green-500"
                onMouseEnter={()=>MouseEnter(-1)}
                onMouseLeave={MouseLeave}
              >
                <a>How it works</a>
                {isHovered==-1  ? <FaCaretUp /> :<FaCaretDown />  }
              </div>
              <a className="hover:text-green-500">Pricing</a>
              <a className="hover:text-green-500">Blog</a>

              {dropdowns.map((curr, id) => (
                <div
                  onMouseEnter={() => MouseEnter(id)}
                  onMouseLeave={MouseLeave}
                  key={id}
                  className="flex items-center h-[5rem] hover:text-green-500"
                >
                  <a>{curr.name}</a>
                  {curr.icon}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-[30%] md:w-[50%] sm:w-[60%] xs:w-[80%] gap-3 flex items-center lg:justify-center">
            <LoginButton />
            <SignupButton />
          </div>
        </div>
      </nav>

      {/* How it works */}
    {dropdown===-1 ?  <div onMouseEnter={()=>MouseEnter(-1)} onMouseLeave={MouseLeave}  className="w-[13rem] p-3 flex cursor-pointer flex-col gap-2 z-20 h-[9rem] border-2 border-slate-200 fixed top-[5rem] left-[19rem] bg-white">
         {
          workElements.map((curr,id)=><p key={id} className="text-[1.03rem] hover:text-green-500 text-customgrey">{curr.works}</p>)
         }
      </div> :null  }

      {/* service */}
      
     {dropdown===0 ?  <div onMouseEnter={()=>MouseEnter(0)} onMouseLeave={MouseLeave}   className="w-[13rem] p-3 flex cursor-pointer flex-col gap-2 z-20 h-[12rem] border-2 border-slate-200 fixed top-[5rem] left-[35.4rem] bg-white">
           {
            serviceElements.map((Curr,id)=><p key={id} className="text-[1.03rem] hover:text-green-500 text-customgrey">{Curr.service}</p>)
           }
        </div>:null  }

        {/* use-cases */}
        {dropdown===1 ?  <div onMouseEnter={()=>MouseEnter(1)} onMouseLeave={MouseLeave}  className="w-[13rem] p-3 flex cursor-pointer flex-col gap-2 z-20 h-[9rem] border-2 border-slate-200 fixed top-[5rem] left-[41.5rem] bg-white">
           {
            usesCases.map((Curr,id)=><p key={id} className="text-[1.03rem] hover:text-green-500 text-customgrey">{Curr.case}</p>)
           }
        </div>:null  }

        {dropdown===2 ?  <div onMouseEnter={()=>MouseEnter(2)} onMouseLeave={MouseLeave}  className="w-[13rem] p-3 flex cursor-pointer flex-col gap-2 z-20 h-[8rem] border-2 border-slate-200 fixed top-[5rem] left-[48.5rem] bg-white">
           {
            NeedHelp.map((Curr,id)=><p key={id} className="text-[1.03rem] hover:text-green-500 text-customgrey">{Curr.help}</p>)
           }
        </div>:null  }


    </>
  );
};

export default Navbar;
