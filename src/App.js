import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

import { Title } from "./Title";
import { AttackingCard } from "./AttackingCard";
import { HOTCButton } from "./HOTCButton";
import styled from "styled-components";
import { DefendingCard } from "./DefendingCard";

const AttackArea = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 2%;
`


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

  const [defendingMonster, changeDefendingMonster] = useState();
    
  const drawCard = (arr) => {
    console.log('draw card');
    console.log(arr);
    console.log(arr.length);
    console.log(arr[Math.floor(Math.random()*arr.length)]);
    changeDefendingMonster(arr[Math.floor(Math.random()*arr.length)]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <AttackArea className="attackArea">
          <AttackingCard monsters={monsters}/>
          <HOTCButton monsters={monsters} drawCard={drawCard}/>
          <DefendingCard defendingMonster={defendingMonster}/>
        </AttackArea>
      </header>
    </div>
  );
}

export default App;
