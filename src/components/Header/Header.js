import React ,{useContext}from "react";
import '../Header/Header.css'
import Cover from "../Coverpage/CoverImage";
import CoverImgage from "../../images/meals.jpg";
import cartContext from "../Store/Cart-Context";


const Header = (props)=>{
    const CartCxt = useContext(cartContext);

    // const numberOfItems = CartCxt.items.reduce((total, item)=>{
    //       return total + item.amount;
    // },0)
    const numberOfItems = CartCxt.amount;
    
    const showCart =()=>{
        props.onClick();
    }
    return(

        <React.Fragment>
            <div className="header">
              <div className="brandName">{props.brandName}</div>
              <button onClick={showCart} className="cart">{CartCxt.msg} <div className="cartItems">{numberOfItems}</div></button>
               
            </div>
            <Cover src={CoverImgage}></Cover>

        </React.Fragment>
    );
}

export default Header;