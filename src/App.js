import Header from "./components/Header/Header";
import MealList from "./components/ItemList/MealList";
import Cart from "./components/Cart/Cart.js";
import React from "react";
function App() {
  return (
    <React.Fragment>
      <Cart></Cart>
      <Header brandName="BHOJ" CartItems="0"></Header>
      <MealList></MealList>
     
    </React.Fragment>
  );
}

export default App;
