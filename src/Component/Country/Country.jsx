import React, { useState } from 'react';
import './Country.css'

const Country = ({country}) => {
    const [visited, setVisited] = useState(false);
   
const handleVisited = () => {
   if(visited=== true){
    setVisited(false);
   }
   else{
    setVisited(true);
   }
}

    return (
        <div className={`country ${visited && 'country-visited' }`}>
            <h3>Name: {country.name.common} </h3>
            <img src= {country.flags?.png} alt="" />
            <p>Independent: {country.independent ? 'Free' : 'Not Free'}</p>
            <p>Population: {country.population}</p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
        </div>
    );
};

export default Country;