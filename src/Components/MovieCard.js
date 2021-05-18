import React from 'react';

export default function MovieCard({movie}) {
    var arr=[];
    for (let i=0 ; i<movie.rate ; i++){
     arr+= '🟊';
}
    return (
        <div >
         <h1 style={{color: "pink"}}> {movie.header}</h1> 
         <p> {movie.description}</p> 
         <div>
         <img style={{width: '250px', border: "1px solid #ddd" }} src= {movie.image}  alt= 'lol'/> 
         </div>
         <br />

         <div style={{color:'yellow'}}>

             {arr}
         </div>         
        </div>
    )
   
}
