import React,{useContext} from "react";
import './items.css';
import Button from "../UI/Button.js"
import ItemQuantity from "./ItemQuant.js"
import CartContext from "../Store/Cart-Context.js";

const Item = props =>{
     

     const CartCxt = useContext(CartContext);
     // const quantity = document.getElementById('amount_'+props.id).value;
     // CartCxt.addItem({...props.item, quantity: quantity})

    
     const addItemToCart =()=>{

          const item={
               id: props.id,
               name:props.name,
               price:props.price,
              
          };
          
          CartCxt.items.push(item);
     }
    return (
          <React.Fragment>
               <li key={props.id}>
                <div>
                <h4>{props.name}</h4>
                     <span>{props.description}</span>
                     <br/>
                     <span className="itemPrice">Rs. {props.price}</span>
                </div>
                  <div className="QuantityForm">
               <ItemQuantity id={'amount_'+props.id} for="Quantity" name="Quantity" type="number" ></ItemQuantity>
                     <Button name="+Add" onClick={addItemToCart}></Button>
                  </div>
               </li>
          </React.Fragment>
    );
}

export default Item;