import React from "react";
import { useGlobalContext } from "./context/AppContext";
import Navbar from "./components/Navbar";
import CarBox from "./components/CarBox";

const App = () => {
  const { allCars } = useGlobalContext();
  
  return <div className="main">
    <Navbar></Navbar>

    {
      allCars.map((car)=>{
        return <CarBox key={car.id} {...car} />
      })
    }
  </div>;
};

export default App;
