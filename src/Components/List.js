import React from 'react';
import MovieCard from './MovieCard'

const List = ({items}) => {
   

    return (    
      <div>
 {items.map((m,i)=>(<MovieCard key={i}  movie={m} />))
}
</div>
    )
      
}

export default List;


