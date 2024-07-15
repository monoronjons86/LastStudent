/* eslint-disable react/prop-types */
import { useState } from 'react';
import './country.css';

const Country = ({country,handleVisitedCountry}) => {
    console.log(country)
    const{name,flags}=country
    const [visited,setvisited]=useState(false);
    const handleVisited=()=>{
        setvisited(!visited);
    }
    const passWithParams=()=>{
        handleVisitedCountry(country)
    }
    return (
        <div className={`country ${visited ?'visited':'non-visited'}`}>
            <h3>Name:{name.common}</h3>
             <img src={flags.png} alt="" />
             <button onClick={passWithParams}>Mark visited</button>
             <br/>
             <button onClick={handleVisited}>Visit</button>
             {visited ? 'I have visited this country':'I want to visit'}
        </div>
    );
};

export default Country;