import Header from "./components/Header/Header";
import MealList from "./components/ItemList/MealList";

function App() {
  return (
    <div>
      <Header brandName="BHOJ" CartItems="0"></Header>
      <MealList></MealList>
     
    </div>
  );
}

export default App;
