import React from "react";
import '../Header/Header.css'
import Cover from "../Coverpage/CoverImage";
import CoverImgage from "../../images/meals.jpg"


const Header = (props)=>{
    return(

        <React.Fragment>
            <div className="header">
              <div className="brandName">{props.brandName}</div>
              <div className="cart">Cart <div className="cartItems">{props.CartItems}</div></div>
               
            </div>
            <Cover src={CoverImgage}></Cover>

        </React.Fragment>
    );
}

export default Header;