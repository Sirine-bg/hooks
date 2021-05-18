import React, { useState, useRef,useEffect} from 'react';


export const Cards = ({ movie }) => {
    return (
        
        <div>
            <h3 className="title" style={{marginLeft:'50px'}}>Movie Add</h3>
            <form>
      <label>Name of the movie:</label>
      <br />
      <input type="text" name="first name" placeholder="Type your name here" />
      <br />
      <label>Description of the movie:</label>
      <br />
      <textarea id="story" name="story"
          rows="5" cols="33" placeholder="Type the description of the movie"> </textarea>
       <br />
      <label>Rate:</label>
      <input type="number"  name="number"  min="0" max="5" />
      <br />
      <input type="submit" value="Submit" />
    </form>
               
        </div>
    );
}; 
export default Cards;
