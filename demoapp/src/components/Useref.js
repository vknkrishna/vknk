import React, { useRef, useState } from "react";

function Name1(){
    const [store,setStore]=useState("");
    const refernce=useRef("");
    const method_Calling=()=>{setStore("")}
    return (
        <center>
            <h1>useRef hook:{store}</h1>
            <input ref={refernce} value={store} type="text" onChange={(e)=>setStore(e.target.value)}/>
            <br/>
            <button onClick={method_Calling}>Restart</button>

        </center>
    )
}
export default Name1;