import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import '../Bottles/Bottles.css'

const Bottles = () => {
    const[bottles,setbottles]=useState([]);
    const[cart,setcart]=useState([]);
    useEffect(()=>{
        fetch('bottle.json')
        .then(res=>res.json())
        .then(data=>setbottles(data))
    },[])
   
const handleAddToCart=bottle=>{
    const newCart=[...cart,bottle];
    setcart(newCart);
}
    return (
        <div>
            <h4>Cart:{cart.length}</h4>
            <div className="bottle-container">
            {/* <h2>Bottles here{bottles.length}</h2> */}
            {
                bottles.map(bottle=><Bottle handleAddToCart={handleAddToCart}    key={bottle.id} bottle={bottle}></Bottle>)
            }
        </div>
        </div>   
    );
};

export default Bottles;