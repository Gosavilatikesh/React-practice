import { createContext, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return <MyStore.Provider value={{cartItems, setCartItems, isCartOpen, setIsCartOpen}}>{children}</MyStore.Provider>;
};
