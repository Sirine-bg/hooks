import React from 'react';
import Rating from './Rating';

export default function MovieCard({movie}) {

    return (
        <div >
         <h1 style={{color: "pink"}}> {movie.header}</h1> 
         <Rating rate={movie.rate} />
         <br />
         <p> {movie.description}</p> 
         <div>
         <img style={{width: '250px', border: "1px solid #ddd" }} src= {movie.image}  alt= 'lol'/> 
         </div>
         <br />

              
        </div>
    )
   
}
