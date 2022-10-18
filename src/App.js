import { useEffect } from 'react';
import { SlotContextProvider } from './context/SlotContext';

import GameTitle from './components/gameTitle/GameTitle';
import PlayArea from "./components/playArea/PlayArea";
import SpinButton from './components/buttons/spinButton/SpinButton';

import './App.css';

function App() {

  return (
    <SlotContextProvider>
      <div className="App">
        <GameTitle />
        <PlayArea />
        <SpinButton/>
      </div>
    </SlotContextProvider>
  );
}

export default App;
