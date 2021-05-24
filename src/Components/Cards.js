import React, { useState} from 'react';



export const Cards = ({items}) => {
    const [movies, setMovies] = useState([...items]);
    const [movie, setMovie] = useState({
header:'',
decription:'',
image:'',
rate:0,
 });
    const [showResults, setShowResults] = useState(false);

    const handleAdd=(x)=>setMovies([...movies,x]);
    const handleChange=(e)=>setMovie({...movie, [e.target.name]:e.target.value});
    const handleShow= ()=>setShowResults(!showResults);
    const forza=(e)=> {
        e.preventDefault();
        handleShow();
        handleAdd(movie);
    }

    return (
        <div>
      { showResults && <div>
           
            <h3 className="title" style={{marginLeft:'50px'}}>Movie Add</h3>
            <form>
      <label>Name of the movie:</label>
      <br />
      <input onChange={handleChange}  type="text" name="header" placeholder="Type movie name here" />
      <br />
      <label>Picture of the movie:</label>
      <br />
      <input onChange={handleChange} type="text" name="image" placeholder="enter your path picture" />
      <br />
      <label>Description of the movie:</label>
      <br />
      <textarea onChange={handleChange} id="story" name="descripton"
          rows="5" cols="33" placeholder="Type the description of the movie"> </textarea>
       <br />
      <label>Rate:</label>
      <input onChange={handleChange} type="number"  name="rate"  min="0" max="5" />
         </form>
    </div>}
     { !showResults ? 
        <button onClick={handleShow}> Add a movie </button>
     : <button onClick={forza}> Save to list </button>}


    </div>

    );
}; 
export default Cards;
