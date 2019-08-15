import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

import Title from "./Title";
import AttackingCard from "./AttackingCard";
import HOTCButton from "./HOTCButton";

function App() {
  const [monsters, setMonsters] = useState()

  useEffect( () => {
    axios
      .get("https://db.ygoprodeck.com/api/v5/cardinfo.php")
      .then(res => {
        const info = res.data;

        //Filter by only monsters
        setMonsters(info.filter( item => item.type.includes("Normal Monster")));
      })
      .catch(err => console.log(`Error: ${err}`))
    }, []);
    
  console.log(monsters);

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <AttackingCard monsters={monsters}/>
        <HOTCButton />
      </header>
    </div>
  );
}

export default App;
