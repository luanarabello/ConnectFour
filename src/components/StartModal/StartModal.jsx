import { useState } from "react";
import "./startModal.css";
import { TOKEN_PATH } from "../../constants";

const StartModal = ({
    setNickA,
    setNickB,
    nickA,
    nickB,
    setHasStarted,
    gameType,
    setGameType,
}) => {
    const handleNick = (e) => {
        if (e.target.name === "p1") setNickA(e.target.value);
        if (e.target.name === "p2") setNickB(e.target.value);
    };

    return (
        <div className="start-container">
            <div>
                <img
                    src={TOKEN_PATH + "4EmLinha.svg"}
                    style={{ marginBottom: "20px", marginTop: "100px" }}
                />
            </div>
            <div className="start-box">
                <h3>Vamos Jogar!</h3>
                <p>Escolha o Modo de Jogo:</p>
                <div className="select-game">
                    <label>
                        <input
                            type="radio"
                            name="tipo-jogo"
                            value="Robô"
                            onChange={(e) => setGameType(e.currentTarget.value)}
                            checked={gameType === "Robô"}
                        />
                        <span>Jogar contra um Robô</span>
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="tipo-jogo"
                            value="2Jogadores"
                            onChange={(e) => setGameType(e.currentTarget.value)}
                            checked={gameType === "2Jogadores"}
                        />
                        <span>2 Jogadores</span>
                    </label>
                    {gameType === "2Jogadores" && (
                        <div className="two-players">
                            <div className="p1-container">
                                <p>Jogador 1: </p>
                                <input
                                    type="text"
                                    name="p1"
                                    placeholder="Insira o seu nick"
                                    onChange={handleNick}
                                    value={nickA}
                                />
                            </div>
                            <div className="p2-container">
                                <p>Jogador 2: </p>
                                <input
                                    type="text"
                                    name="p2"
                                    placeholder="Insira o seu nick"
                                    onChange={handleNick}
                                    value={nickB}
                                />
                            </div>
                        </div>
                    )}
                </div>
                <button onClick={() => setHasStarted(true)}>Jogar!</button>
            </div>
        </div>
    );
};
export default StartModal;
