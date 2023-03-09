import React, { useState } from 'react';
function Crudtable(){
    let [car,setCar]=useState([
        {
            id:"AQ1",
            imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQexdT8PCinBlH3qvtTyNlMGH60QZhdCIruA&usqp=CAU",
            name:"Audi",
            price:100000000,
            qty:3
        },
        {
            id:"AQ2",
            imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISxbkOf19Co_XROnVcGsy05m-GVVjHi1ZVg&usqp=CAU",
            name:"Jaguar",
            price:200000000,
            qty:5
        },
        {
            id:"AQ3",
            imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWkqp9LIRzlteDhdvvcEzuSwwF_UPf-2T-Eg&usqp=CAU",
            name:"ferrari",
            price:300000000,
            qty:7
        },
        {
            id:"AQ4",
            imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYuEQSWkWXIPk0aOv6R6Cy-kRDqmmRqnJPZA&usqp=CAU",
            name:"Range Rover",
            price:400000000,
            qty:7
        },
    ]);
    let incrQty=(insc)=>{
        setCar((toinsc)=>{
            return toinsc.map((Cars,index)=>{
                if(Cars.id ===insc){
                    return{
                        ...Cars,
                        qty:Cars.qty+1 
                    }
                }
                else{
                    return Cars;
                }
            })
        })
    }
    let decrQty=(insc)=>{
        setCar((toinsc)=>{
            return toinsc.map((Cars,index)=>{
                if(Cars.id ===insc){
                    return{
                        ...Cars,
                        qty:Cars.qty-1 > 0 ? Cars.qty-1:1
                    }
                }
                else{
                    return Cars;
                }
            })
        })
    }
    let deleteCars=(insc)=>{
        setCar((toinsc)=>{
            return toinsc.filter(car => car.id !== insc);
        })
    }

    let calcGrandtotal=()=>{
        let total=0;
        for(let Cars of car){
            total+=(Number(Cars.qty)* Number(Cars.price))
        }
        return total;
    }

    return (
        <>
        <div className='container mt-3'>
            <div className='row'>
                <div className='col'>
                    <p className='h1 text-success'>Cars Table</p>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col'>
                    <table className='table table-hover text-center text-striped'>
                        <thead>
                            <tr>
                                <th>S:NO</th>
                                <th>IMAGE</th>
                                <th>NAME</th>
                                <th>PRICE</th>
                                <th>QTY</th>
                                <th>TOTAL</th>
                                <th>EVENTS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            car.map((Cars,index)=>{
                                return(
                                    <tr>
                                        <td>{Cars.id}</td>
                                        <td>
                                            <img src={Cars.imgUrl} width={50} height={50}/>
                                        </td>
                                        <td>{Cars.name}</td>
                                        <td>&#8377;{Cars.price.toFixed(2)}</td>
                                        <td>
                                            <i onClick={()=>decrQty(Cars.id)} class="bi bi-dash"></i>
                                            {Cars.qty}
                                            <i onClick={()=>incrQty(Cars.id)} class="bi bi-plus"></i>

                                        </td>
                                        <td>&#8377;{(Cars.price* Cars.qty).toFixed(2)}</td>
                                        <td>
                                            <button className='btn btn-danger' onClick={()=>deleteCars(Cars.id)} >
                                            <i class="bi bi-trash-fill"></i></button>                                       
                                            </td>
                                    </tr>
                                )
                            })
                            }
                            <tr>
                                <td colspan={4}></td>
                                <td>GrandTotal</td>
                                <td>{calcGrandtotal()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )



}
export default Crudtable;