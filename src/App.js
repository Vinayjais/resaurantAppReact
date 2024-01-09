import Header from "./components/Header/Header";
import MealList from "./components/ItemList/MealList";
import Cart from "./components/Cart/Cart.js";
import React,{useState} from "react";
function App() {

  const [showCart, setShowCart] = useState(false);

  const ShoWCartHandler=()=>{
    setShowCart(true);
  }
  const CloseCartHandler =()=>{
     setShowCart(false)
  }


  return (

    <React.Fragment>
     {showCart &&  <Cart CloseCart={CloseCartHandler}></Cart>}
      <Header onClick={ShoWCartHandler} brandName="BHOJ" CartItems="0"></Header>
      <MealList></MealList>
     
    </React.Fragment>
  );
}

export default App;
