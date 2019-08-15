import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

import Title from "./Title";

function App() {

  useEffect( () => {
    const getData = () => {
      axios
      .get("https://db.ygoprodeck.com/api/v5/cardinfo.php")
      .then(res => console.log(res));
    }
    getData();
  })

  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <AttackingCard />
        <HOTCButton />
      </header>
    </div>
  );
}

export default App;
