import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {


  const [number, setNumber] = useState(JSON.parse(localStorage.number));

  const [totalPrice, setTotalPrice] = useState(JSON.parse(localStorage.totalPrice))

  const handletotalPrice = (price, type) => {
    if (type) {
      setTotalPrice(prev => prev + price); localStorage.totalPrice = price+totalPrice;
    }
    else {
      setTotalPrice(prev => prev - price); localStorage.totalPrice = totalPrice-price;
    }
  }

  const increaseNumber = () => {
    setNumber(prev => prev + 1);
    localStorage.number++
  };
  const decreaseNumber = () => {
    if (number !== 0)
      setNumber(prev => prev - 1)
    localStorage.number--
  };

  return (
    <CartContext.Provider value={{ number, increaseNumber, decreaseNumber, handletotalPrice, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};