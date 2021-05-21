import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Components/Cards';
import  Filtermoviee from './Components/Filtermoviee';
import Footer from './Components/Footer';
import List from './Components/List'

function App() {
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
    
  ];
  const [search, setSearch] = useState('');
  const [searchRate, setSearchRate] = useState(0);

  return (
    <div className="App" style={{textAlign: 'center', backgroundColor: 'grey', marginTop: '0px'}}>
    <h1 style={{ color: "pink"}}> Welcome to my movie website</h1>
   <Filtermoviee setSearch={setSearch} searchRate={searchRate} setSearchRate={setSearchRate}/> 
   <List items={items.filter((val)=>val.rate>= searchRate && val.header.toLowerCase().includes(search.toLowerCase()))}/> 
   <Cards items={items}/>
   <Footer/>
    </div>
  );
}

export default App;
