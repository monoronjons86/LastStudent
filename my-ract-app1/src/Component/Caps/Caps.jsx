import { useEffect } from "react";
import { useState } from "react";
import Cap from "../Cap/Cap";
import '../Caps/Caps.css'

const Caps = () => {
    const [caps,setcaps]=useState([]);
    const[onecap,setonecap]=useState([]);
    useEffect(()=>{
        fetch('cap.json')
        .then(res=>res.json())
        .then(data=>setcaps(data));
    },[])
    const handleOnecap=(cap)=>{
        // console.log("cap is clicked");
        const neWcap=[...onecap,cap]
        setonecap(neWcap)
    }
    return (
        <div>
            <h1>my practice purpose:{onecap.length}</h1>
            <div className="Caps-container">
                {
                    caps.map(cap=><Cap cap={cap} handleOnecap={handleOnecap} ></Cap>)
                }

            </div>
        </div>
    );
};

export default Caps;