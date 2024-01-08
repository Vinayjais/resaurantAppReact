import React from "react";
import "../Coverpage/Image.css"
import CoverContent from "./CoverContent";
const Cover =(props)=>{
    
    return(
        <React.Fragment>
            <div className="imageBox">
             
            <img className="img" src={props.src} alt="Error in Loading"></img>
            <CoverContent></CoverContent>
            </div>
            

        </React.Fragment>
    );
}

export default Cover;