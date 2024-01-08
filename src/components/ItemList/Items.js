import React from "react";
import './items.css';

const Item = props =>{
    return (
          <React.Fragment>
               <li key={props.id}>
                    <h4>{props.name}</h4>
                     <span>{props.description}</span>
                     <br/>
                     <span className="itemPrice">Rs. {props.price}</span>
               </li>
          </React.Fragment>
    );
}

export default Item;