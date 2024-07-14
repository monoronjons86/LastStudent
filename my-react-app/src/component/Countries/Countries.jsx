/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Country from "../Country/Country";
import '../Countries/countries.css'


const Countries = () => {
    const[countries,setcountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setcountries(data))
    },[])
  return (
    <div>
      <h1>Countries:{countries.length}</h1>
     <div className="container">
     {
        countries.map(country=><Country key={country.cca3} country={country}></Country>)
      }
     </div>
    </div>
  )
};

export default Countries;
