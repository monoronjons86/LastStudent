import { useState } from "react";

const StateFulFrm = () => {
    const[email,setEmail]=useState(null)
    const handleSubmit=e=>{
        e.preventDefault();
        console.log(email)

    }
    const handleEmailChange=e=>{
        console.log(e.target.value);
        setEmail(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input onChange={handleEmailChange} type="email"  name="email"/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default StateFulFrm;