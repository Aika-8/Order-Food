import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleAddFood = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };
  return (
    <>
      <Header cartItems={cartItems} setCartItems={setCartItems} />
      <Main addFood={handleAddFood} />
    </>
  );
}

export default App;
