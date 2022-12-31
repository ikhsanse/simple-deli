import React, { useState } from "react";

import Header from "../src/components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Meals from "./components/Meals/Meals";
import CartProvider from "./components/store/CartProvider";

function App() {
  document.title = "Simple Deli";
  const [cartIsShow, setCartIsShow] = useState(false);

  const cartShowHandler = () => {
    setCartIsShow(true);
  };

  const cartHideHandler = () => {
    setCartIsShow(false);
  };
  return (
    <CartProvider>
      {cartIsShow && <Cart onHideCart={cartHideHandler} />}
      <Header onShowCart={cartShowHandler} />
      <main className="bg-stone-700 pb-4 md:pb-20 lg:pb-4">
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
