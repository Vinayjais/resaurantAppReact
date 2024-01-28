import React ,{useContext}from "react";
import Modal from "../UI/Model.js";
import CartContext from "../Store/Cart-Context.js";
const Cart = props =>{
     const cartCxt = useContext(CartContext);
     
      
    const CloseCartHalnder=()=>{
        props.CloseCart()
    }
    const CartItems =( <ul>
          {
            cartCxt.items.map((item)=>{
               return <li>{item.name} <span>{item.quantity}</span> </li>
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