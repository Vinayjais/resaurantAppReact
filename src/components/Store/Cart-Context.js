import React from "react";

const CartContext = React.createContext({
    items:[],
    amount: 0,
    addItem: function (item){},
    removeItem: function(id){}
})

export default CartContext;