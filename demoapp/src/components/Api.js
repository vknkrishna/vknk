import React, { useEffect } from 'react';

function Name3(){
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then(
            x=>x.json()
        ).then(y=>console.log(y))

    })
    return <>
    <h1>Useing react Api data</h1>
    </>
}
export default Name3;