import { useState } from "react";
import "./App.css";
import UserControls from "./components/UserControls/UserControls";
import PlayersRolls from "./components/PlayersRolls/PlayersRolls";

function App() {
  const players = [0,1,2,3,4,5,6]
  const [roll, setRoll] = useState()
  const [probability, setProbability] = useState()

  return (
    <>
      <header>
        <h1>FFXIV Roll Probability Simulator</h1>
      </header>
      <main>
        <div>
          <p>Tool to calculate how lucky you need to be to win that coffer</p>
        </div>
        <UserControls userRoll={roll} setUserRoll={setRoll} setWinProbability={setProbability}/>
        <PlayersRolls roll={roll}/>
        <div>
          <p>Item win probability: {probability ? (probability * 100).toFixed(8) : 0}%</p>
        </div>
      </main>
    </>
  );
}

export default App;
