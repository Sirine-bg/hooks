import React, { useState} from 'react';
import Rating from './Rating';

export default function Filtermoviee({setSearch,searchRate,setSearchRate}) {
    const [rating, setRating] = useState(0);
  
    return (
        <div >
            
            <h3 className="title" >Movie Search</h3>
            <div style={{display: 'inline'}}  > 
            <input style={{marginLeft: '50px', marginTop:'10px'}}
            type="text" 
            placeholder="Name of the movie" 
            onChange={(e) => setSearch(e.target.value)}
              />
          <input style={{marginLeft: '80px', marginTop:'10px'}}
             type="text" 
             placeholder="Rate of the movie" 
              onChange={(e) => setSearchRate(e.target.value)}/>   
              <div>
              <Rating   rate={searchRate} setSearchRate={setSearchRate}  />  
              </div>
               
             



        
        </div>

     







        </div>
    )
}
