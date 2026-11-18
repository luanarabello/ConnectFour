import StartModal from "./components/StartModal/StartModal";
import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
    const [hasStarted, setHasStarted] = useState(false);
    const [gameType, setGameType] = useState("Robô");
    const [nickA, setNickA] = useState("Você");
    const [nickB, setNickB] = useState("Robô");
    return (
        <div>
            {!hasStarted ? (
                <StartModal
                    nickA={nickA}
                    nickB={nickB}
                    setNickA={setNickA}
                    setNickB={setNickB}
                    setHasStarted={setHasStarted}
                    gameType={gameType}
                    setGameType={setGameType}
                />
            ) : (
                <Board
                    gameType={gameType}
                    setHasStarted={setHasStarted}
                    nickA={nickA}
                    nickB={nickB}
                />
            )}
        </div>
    );
}

export default App;
