import React from "react";
import Item from './Items'
import   "./MeakList.css"

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
const MealList = (props)=>{
      
    return (
        <React.Fragment>
               <div className="mealBox" >
                    <h3>Todays Special</h3>
                    <ul className="mealBoxList">
                         {DUMMY_MEALS.map((item)=>{
                            return (<Item id={item.id} name={item.name} description={item.description} price={item.price}></Item>)
                         })}
                    </ul>
               </div>

        </React.Fragment>
    );
}

export default MealList;