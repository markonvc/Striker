import { useEffect } from 'react';
import './App.css';

import GameTitle from './components/gameTitle/GameTitle';
import PlayArea from "./components/playArea/PlayArea";

function App() {

  return (
    <div className="App">
      <GameTitle/>
      <PlayArea/>
    </div>
  );
}

export default App;
