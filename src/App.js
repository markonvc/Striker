import { useEffect } from 'react';
import { SlotContextProvider } from './context/SlotContext';

import GameTitle from './components/gameTitle/GameTitle';
import PlayArea from "./components/playArea/PlayArea";
import CreditArea from './components/creditArea/CreditArea';

import './App.css';

function App() {

  return (
    <SlotContextProvider>
      <div className="App">
        <GameTitle />
        <PlayArea />
        <CreditArea/>
      </div>
    </SlotContextProvider>
  );
}

export default App;
