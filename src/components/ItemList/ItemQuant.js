import React from "react";

const QualityForm = props=>{
          
    return(
            <React.Fragment>
                <div className="formControl">
                <label htmlFor={props.for}>{props.name} :</label>
                <input type={props.type}
                 id={props.id}
                 min='1'
                 max='5'
                 step='1'
                 defaultValue='1'
                 value={props.value}
                
                
                ></input>
                  
                
                </div>
               
            </React.Fragment>
    );
}

export default QualityForm;