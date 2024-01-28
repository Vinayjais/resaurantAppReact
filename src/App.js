import Header from "./components/Header/Header";
import MealList from "./components/ItemList/MealList";
import Cart from "./components/Cart/Cart.js";
import React,{useState} from "react";
import CartProvider from "./components/Store/CartProvider.js";
function App() {

  const [showCart, setShowCart] = useState(false);

  const ShoWCartHandler=()=>{
    setShowCart(true);
  }
  const CloseCartHandler =()=>{
     setShowCart(false)
  }


  return (

    <CartProvider>
     {showCart &&  <Cart CloseCart={CloseCartHandler}></Cart>}
      <Header onClick={ShoWCartHandler} brandName="BHOJ" ></Header>
      <MealList></MealList>
     
    </CartProvider>
  );
}

export default App;
