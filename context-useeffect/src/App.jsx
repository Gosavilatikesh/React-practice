import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartScreen from "./pages/CartScreen";

const App = () => {
  const [productsData, setProductsData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  console.log(cartItems);
  

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
      <Navbar setIsCartOpen={setIsCartOpen}/>

      {isCartOpen ? (
        <div className="">
          <CartScreen cartItems={cartItems}/>
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-4">
          {productsData.map((elem) => {
            return (
              <ProductCard
                key={elem.id}
                product={elem}
                setCartItems={setCartItems}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
