import React from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const List = ({items}) => {
   

    return (    
      <div>
 {items.map((m,i)=>( <Link to={`/Trailer${i+1}`} style={{textDecoration:'none', color:'black' }}> <MovieCard key={i}  movie={m} />  </Link>  ))
}
</div>
    )
      
}

export default List;


