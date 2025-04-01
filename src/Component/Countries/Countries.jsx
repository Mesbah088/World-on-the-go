import React, { use, useState} from 'react';
import Country from '../Country/Country';
import './Countries.css'




const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([]);

    const Countries = use(countriesPromise);

    const handleVisitedFlag = (flag) => {
        const newVisitedFlag = [...visitedFlags, flag ];
        setVisitedFlags(newVisitedFlag);
    }
   
    const handleVisitedCountries = (country) =>{
        console.log('Country visited clicked to be added', country);
        const newVisitedCounries = [...visitedCountries,country]
      setVisitedCountries(newVisitedCounries);
    }
    return (
        <div >
           <h1> Travelling Countries : {Countries.length}</h1> 
           <h3>Travelled so far: {visitedCountries.length} </h3>
           <div className='visited-flags-container'>
            {
                visitedFlags.map((flag , index)=> <img  key={index} src={flag} alt="" /> )
            }
           </div>
           <ol>
            {
                visitedCountries.map(country => <li> key={country.cca3}{country.name.common}</li> )
            }
           </ol>
            
            <div className='countries'>
            {
            Countries.map( country => <Country
                key={country.cca3}
                handleVisitedCountries = {handleVisitedCountries}
                handleVisitedFlag = {handleVisitedFlag}
                 country={country}></Country>)
           }
            </div>
            </div>
    );
};

export default Countries;