import React, { useState, useRef} from 'react';
import List from './List'

export const Filtermovie = (props) => {
    const [search, setSearch] = useState('')
    let inputel = useRef();
    return (
        <div>
            <div style={{display: 'flex' , justifyContent: 'space-between'}} > 
            <h3 className="title" style={{marginLeft: '10px'}}>Movie Search</h3>
                <input style={{marginRight: '480px', marginTop:'10px'}}
                ref={inputel}
                    type="text" 
                    placeholder="Search for a  movie " 
                    value={props.search}
                    onChange={(e) => setSearch(e.target.value)}
                      />
            </div>
            <div>
             
            <List/> 
            </div>
           
        </div>
    )
}
export default Filtermovie
