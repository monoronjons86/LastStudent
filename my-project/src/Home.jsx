/* eslint-disable no-unused-vars */
import { useState } from "react"

export default function Home(){
    const[count,setCount]=useState(0)
    const handleAdd=()=>{
        const newCount=count+1;
        setCount(newCount);

    }
    const handleReduce=()=>{
        const newCount=count-1;
        setCount(newCount);
    }
    return(
        <div style={{border:'2px solid red'}}>
            <h1>Counter:{count}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduse</button>
        </div>
    )
}