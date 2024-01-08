import React from "react";

const QualityForm = props=>{
    return(
            <React.Fragment>
                <div className="formControl">
                <label htmlFor={props.for}>{props.name} :</label>
                <input type={props.type}></input>
                
                </div>
               
            </React.Fragment>
    );
}

export default QualityForm;