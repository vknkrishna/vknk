import React, { useReducer } from "react";
const inatilstate={count:0};
 function Name(state,action){
   
    switch(action){
        case 'increment':
            return {count:state.count+1}
        case 'decrement':
            return {count:state.count-1}
        default:

    }
    
 }
 function Game(){
    const [set,actionState]=useReducer(Name,inatilstate)
    return (
        <center>
            <h1>its Usereducer hook</h1>
            <h1>{set.count}</h1>
            <button onClick={()=>actionState('increment')}>click+</button>
            <button onClick={()=>actionState('decrement')}>click-</button>

        </center>
    )
 }
 export default Game;