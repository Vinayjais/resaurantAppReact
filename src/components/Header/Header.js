import React from "react";
import '../Header/Header.css'
import Cover from "../Coverpage/CoverImage";
import CoverImgage from "../../images/meals.jpg"


const Header = (props)=>{

    const showCart =()=>{
        props.onClick();
    }
    return(

        <React.Fragment>
            <div className="header">
              <div className="brandName">{props.brandName}</div>
              <button onClick={showCart} className="cart">Cart <div className="cartItems">{props.CartItems}</div></button>
               
            </div>
            <Cover src={CoverImgage}></Cover>

        </React.Fragment>
    );
}

export default Header;