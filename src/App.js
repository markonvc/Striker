import { SlotContextProvider } from './context/SlotContext';

import StartGame from './components/startGame/StartGame';
import GameTitle from './components/gameTitle/GameTitle';
import YouWinMessage from './components/youWinMessage/YouWinMessage';
import PlayArea from "./components/playArea/PlayArea";
import CreditArea from './components/creditArea/CreditArea';

import './App.css';

function App() {

  return (
    <SlotContextProvider>
      <div className="App">
        {/* <StartGame/> */}
        <GameTitle />
        {/* <YouWinMessage/> */}
        <PlayArea />
        <CreditArea/>
      </div>
    </SlotContextProvider>
  );
}

export default App;
