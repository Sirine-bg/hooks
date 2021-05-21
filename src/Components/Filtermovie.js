import React, { useState, useRef} from 'react';
import List from './List'

export const Filtermovie = () => {
    const [search, setSearch] = useState('')
    return (
        <div>
            <div style={{display: 'flex' , justifyContent: 'space-between'}} > 
            <h3 className="title" style={{marginLeft: '10px'}}>Movie Search</h3>
                <input style={{marginRight: '480px', marginTop:'10px'}}
            
                    type="text" 
                    placeholder="Search for a  movie " 
                    onChange={(e) => setSearch(e.target.value)}
                      />
            </div>

            <div>
           {items.filter((val,i)=>{
          if (search && val.header.toLowerCase().includes(search.toLowerCase()) ){
            return {val}} }
          </div>
        </div>
           )}
   
 
export default Filtermovie
