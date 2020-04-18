import React from 'react';

import './Button.css';

export default props=>{
    let classes = 'button ';
    classes += props.double ? 'double' : "" /*Se props.double for true, add ao css a 'classes'*/ 
    
    return(
        <button className={classes} 
            onClick={ ()=>props.click && props.click(props.label)}>
            {props.label}
        </button>
    );
}