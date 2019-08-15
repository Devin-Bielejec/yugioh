import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

import { Title } from "./Title";
import { AttackingCard } from "./AttackingCard";
import { HOTCButton } from "./HOTCButton";
import styled from "styled-components";
import { DefendingCard } from "./DefendingCard";
import { Result } from "./Result";

const AttackArea = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 2%;
`


function App() {
  const [attackingMonster, changeAttackingMonster] = useState();
  const [defendingMonster, changeDefendingMonster] = useState();
    
  useEffect( () => {
    axios
      .get("https://db.ygoprodeck.com/api/v5/cardinfo.php")
      .then(res => {
        const info = res.data;

        //Filter by only monsters
        const monsters = info.filter( item => item.type.includes("Normal Monster"));

        changeAttackingMonster(monsters[Math.floor(Math.random()*monsters.length)]);
        changeDefendingMonster(monsters[Math.floor(Math.random()*monsters.length)]);

      })
      .catch(err => console.log(`Error: ${err}`))
    }, []);

  const [showDefendingMonster, changeShowDefendingMonster] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(false);

  const drawCard = () => {
    changeShowDefendingMonster(true);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <AttackArea className="attackArea">
          <AttackingCard attackingMonster={attackingMonster}/>
          <HOTCButton drawCard={drawCard}/>
          <DefendingCard showDefendingMonster={showDefendingMonster} defendingMonster={defendingMonster} setDisplayMessage={setDisplayMessage}/>
          <Result displayMessage={displayMessage} defendingMonster={defendingMonster} attackingMonster={attackingMonster}/>
        </AttackArea>
        
      </header>
    </div>
  );
}

export default App;
