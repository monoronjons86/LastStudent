import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import '../Bottles/Bottles.css'

const Bottles = () => {
    const[bottles,setbottles]=useState([]);
    useEffect(()=>{
        fetch('bottle.json')
        .then(res=>res.json())
        .then(data=>setbottles(data))
    },[])
    return (
        <div className="bottle-container">
            {/* <h2>Bottles here{bottles.length}</h2> */}
            {
                bottles.map(bottle=><Bottle key={bottle.id} bottle={bottle}></Bottle>)
            }
        </div>
    );
};

export default Bottles;