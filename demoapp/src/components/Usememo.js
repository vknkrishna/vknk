import React, { useMemo, useState } from "react";
function Name2(){
    const [add,setAdd]=useState(2);
    const [set,setCount]=useState();
    const name=useMemo(function multi(){ return add+3},[add])
    return(
    <>
    <center>
    <h1>its UseMemo hook:</h1>
    <h2>{name}</h2>
    <button onClick={()=>setAdd(add+1)}>click+</button>
    <h2>{add}</h2>
    <button onClick={()=>setCount(add-1)}>click-</button>
    <h2>{set}</h2>
    </center>
    </>
    )
}
export default Name2;