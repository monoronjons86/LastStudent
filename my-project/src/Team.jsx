import { useState } from "react"

export default function Team(){
    const [tam,setTeam]=useState(11);
    const handleTeam=()=>{
        const NewTeam=tam+1;
        setTeam(NewTeam);
    }
    const handleRemove=()=>{
        const NewRemove=tam-1;
        setTeam(NewRemove);
    }

    const teamStyle={
        border:'2px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }
    return(
        <div style={teamStyle}>
            <h3>Players:{tam}</h3>
            <button onClick={handleTeam}>OnEven</button>
            <button onClick={handleRemove}>AddRemove</button>
            
        </div>
    )
}