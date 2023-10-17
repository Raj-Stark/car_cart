import React from "react";
import { useGlobalContext } from "../context/AppContext";

const Navbar = () => {
  const { cartArray } = useGlobalContext();

  
  return (
    <nav className="navbar">
      <section className="nav-box">
        <h1>Logo</h1>

        <div>Cart Items {cartArray.length}</div>
      </section>
    </nav>
  );
};

export default Navbar;
