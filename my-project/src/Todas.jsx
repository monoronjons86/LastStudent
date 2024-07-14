/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import Toda from "./Toda";

export default function Todas(){
    const[todo,setTodo]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setTodo(data))
    },[])
    return(
        <div>
           <h1>Todo list:</h1> 
           {
            todo.map(toda=><Toda toda={toda}></Toda>)
           }
        </div>
    )
}