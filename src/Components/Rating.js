import React from 'react'

export default function Rating({rate}) {
    var arr=[];
    for (let i=0 ; i<5 ; i++){
        if(i<rate){
     arr+= '🟊'}
            else{
                arr+='☆'
            }
}
    return (
         <div style={{color:'yellow'}}>

        {arr}
         </div>    
    
    )
}
