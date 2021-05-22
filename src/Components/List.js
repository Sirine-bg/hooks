import React from 'react';
import MovieCard from './MovieCard';
import { Link, Route } from 'react-router-dom';

const List = ({items}) => {
   

    return (    
      <div>
 {items.map((m,i)=>( <Link to={'/Trailer'} style={{textDecoration:'none', color:'black' }}> <MovieCard key={i}  movie={m} />  </Link>  ))
}
</div>
    )
      
}

export default List;


