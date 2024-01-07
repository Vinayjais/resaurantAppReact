import React from "react";
import '../Header/Header.css'

const Header = (props)=>{
    return(

        <React.Fragment>
            <div className="header">
              <div className="brandName">{props.brandName}</div>
              <div className="cart">Cart <div className="cartItems">{props.CartItems}</div></div>
               
            </div>

        </React.Fragment>
    );
}

export default Header;