import React, { use} from 'react';
import Country from '../Country/Country';
import './Countries.css'




const Countries = ({countriesPromise}) => {

    const Countries = use(countriesPromise);
    console.log(Countries);
    return (
        <div >
           <h1> Travelling world : {Countries.length}</h1> 
            
            <div className='countries'>
            {
            Countries.map( country => <Country country={country}></Country>)
           }
            </div>
            </div>
    );
};

export default Countries;