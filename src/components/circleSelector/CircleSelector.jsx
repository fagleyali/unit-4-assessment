import React from 'react';
import './circleSelector.css';

const CircleSelector=props=>{
console.log(props.selection)

    return(
        <div className="CircleSelector">
                
                <button name="1" className={props.selection===1?'selected':''} onClick={props.handleButtonSelection}>SELECT CIRCLE 1 </button>
                <button name="2" className={props.selection===2?'selected':''} onClick={props.handleButtonSelection}>SELECT CIRCLE 2</button>
                <button name="3" className={props.selection===3?'selected':''} onClick={props.handleButtonSelection}>SELECT CIRCLE 3</button>
                <button name="4" className={props.selection===4?'selected':''} onClick={props.handleButtonSelection}>SELECT CIRCLE 4</button>
        </div>
    )
}

export default CircleSelector;