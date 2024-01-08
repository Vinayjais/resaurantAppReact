import React from "react";
import './items.css';
import Button from "../UI/Button.js"
import ItemQuantity from "./ItemQuant.js"

const Item = props =>{
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
                     <ItemQuantity for="Quantity" name="Quantity" type="number"></ItemQuantity>
                    <Button name="+Add"></Button>
                  </div>
               </li>
          </React.Fragment>
    );
}

export default Item;