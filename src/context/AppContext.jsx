import React, { createContext, useContext, useReducer } from "react";
import { data } from "../utils/data.jsx";
import { CarReducer } from "../reducer/CarReducer.jsx";

const GlobalContext = createContext();

const initialState = {
  allCars: [...data],
  cartArray: [],
};

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(CarReducer, initialState);

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_CART", payload: id });
  };


  return (
    <GlobalContext.Provider value={{ ...state, addToCart, removeFromCart  }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default AppContext;
