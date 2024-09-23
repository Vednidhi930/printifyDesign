import { useState } from "react";
import "./App.css";
import Advertisement from "./Component/Advertisement";
import Copyrights from "./Component/Copyrights";
import Footer1 from "./Component/Footer1";
import Footer2 from "./Component/Footer2";
import Home from "./Component/Home";
import Money from "./Component/Money";
import Navbar from "./Component/Navbar";
import Products from "./Component/Products";
import Review from "./Component/Review";
import SalesTalks from "./Component/SalesTalks";
import Service from "./Component/Service";
import Sidebar from "./Component/Sidebar";
import Test from "./Component/Test";

function App() {

  const[isActive,setIsActive]=useState(false)

  const handleIsActive=()=>{
    setIsActive(true)
  }

  const handleIsNotActive=()=>{
    setIsActive(false)
  }

  return (
    <>
      {/* <Test/> */}
      <div className="z-10 relative">
      <Navbar handleIsActive={handleIsActive} />
    {isActive ?  <Sidebar handleIsNotActive={handleIsNotActive} /> :null }
      <Home />
      <Advertisement />
      <Products />
      <Service />
      <SalesTalks />
      <Review />
      <Money />
      <Footer1 />
      <Footer2 />
      <Copyrights />
      </div>
    </>
  );
}

export default App;
