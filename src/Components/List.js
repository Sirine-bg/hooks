import React, { useState, useRef} from 'react';
import MovieCard from './MovieCard'

export const List = (movie) => {
  const [search, setSearch] = useState('')
    const items = [
        {
          id: 1,
          header: 'A fall from grace',
          description:
            ' Disheartened since her ex-husbands affair, Grace Waters feels restored by a new romance. But when secrets erode her short-lived joy, Grace vulnerable side turns violent.',
          
          image: '/grace.jpg',
          rate: 3,
        },
        {
          id: 2,
          header: 'Mirage',
          description:
            ' MIRAGE combines a murder thriller with a time-travel, alternate-universe story in which Vera (Adriana Ugarte), a happily married woman, moves into a new house with her husband, David (Alvaro Morte), and young daughter, Gloria (Luna Fulgencio). A nurse now, Vera left medical school to raise her daughter.',
          image: '/mirage.png',
          rate: 4,
        },
        {
          id: 3,
          header: 'The invisable guest',
          description:
            'A successful entrepreneur accused of murder and a witness preparation expert have less than three hours to come up with an impregnable defense.',
          image: '/guest.jpg',
          rate: 5,
        },
        
      ]

    return (    
      <div>
{items.filter((val)=>{
  if (search ==""){
      return val
  }
  else if (val.header.toLowerCase().includes(search.toLowerCase()) ){
    return val
}
}).map((m,i)=>{  
  return(
    <div> 
<MovieCard key={i}  movie={m} />
      </div>
  );
})} 
</div>
    )
      
 
}

export default List
