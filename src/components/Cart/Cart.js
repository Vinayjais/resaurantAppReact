import React from "react";
import Modal from "../UI/Model.js";
const Cart = props =>{
      
    const CloseCartHalnder=()=>{
        props.CloseCart()
    }
    const CartItems =( <ul>
          {
            [{id:"1",name:"Tea", Quantity: 2, price: 12.33},{id:"2",name:"Tea", Quantity: 2, price: 12.33}].map((item)=>{
               return <li>{item.name} </li>
            })
          }
    </ul>)

    return (
             <Modal>
                {CartItems}
                <div>
                    <span>Total amount <p> </p></span>
                    <span> Rs. 67.00</span>
                </div>
                <div>
                    <button onClick={CloseCartHalnder}>Close</button>
                    <button>Order</button>
                </div>
             </Modal>
    );
}

export default Cart