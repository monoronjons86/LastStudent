/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import Country from "../Country/Country";
import '../Countries/countries.css'


const Countries = () => {
    const[countries,setcountries]=useState([]);
    const[visitedCountries,setvisitedCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setcountries(data))
    },[])
    const handleVisitedCountry=country=>{
        console.log('add this visited your country');
        // console.log(country);
        //I dont understand the part
    }
  return (
    <div>
      <h1>Countries:{countries.length}</h1>
      <div>
      <h5>Visited countries</h5>
      <ul>

      </ul>
      </div>
     <div className="container">
     {
        countries.map(country=><Country key={country.cca3} handleVisitedCountry={handleVisitedCountry}     country={country}></Country>)
      }
     </div>
    </div>
  )
};

export default Countries;
