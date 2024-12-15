import React, { createContext } from "react";
import { food_list } from "../../assets/assets"; // Ensure this import is correct

// Create the context
export const StoreContext = createContext(null);

// Create the provider
export const StoreContextProvider = ({ children }) => {
  const contextValue = {
    food_list, // Share the food_list through context
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
