import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartScreen from "./pages/CartScreen";
import { MyStore } from "./context/MyContext";

const App = () => {
  
  let {isCartOpen, setCartItems, cartItems} = useContext(MyStore)

  const [productsData, setProductsData] = useState([]);

  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log("error",error);
    }
  };
  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="h-screen p-2 flex flex-col gap-4">
      <Navbar/>

      {isCartOpen ? (
        <div className="">
          <CartScreen />
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-4">
          {productsData.map((elem) => {

              let isInCart = cartItems.find((val) => val.id === elem.id)

            return (
              <ProductCard
                key={elem.id}
                product={elem}
                setCartItems={setCartItems}
                isInCart={isInCart}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
