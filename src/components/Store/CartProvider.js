import CartContext from "./Cart-Context";
import React, { useState } from "react";

const CartProvider =(props)=>{
   
    const [items,updateItems] = useState([]);


     const cartContext = {
        items: items,
        amount:0,
        addItems: function (item) {
            updateItems((prevItems)=>{
                return [...prevItems, item];
            })
           
         },
        removeItems: function (id) {},
        msg:'Cart'
     };
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;