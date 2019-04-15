import React from 'react';
import './circles.css';

const Circles=props=>{

    return(
        <div className="Circles">

            <div className={props.selection===1?'selected':''}>1</div>
            <div className={props.selection===2?'selected':''}>2</div>
            <div className={props.selection===3?'selected':''}>3</div>
            <div className={props.selection===4?'selected':''}>4</div>
        </div>
    )
}

export default Circles;