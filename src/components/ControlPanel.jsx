import React from "react";
import { TOKEN_PATH } from "../constants";
import { playersTokens } from "../constants";
import Timer from "./Timer/Timer";

const ControlPanel = ({
    timerKey,
    setTimerKey,
    gameOver,
    oppPlayer,
    curPlayer,
    setCurPlayer,
    setOppPlayer,
    nickA,
    nickB,
}) => {
    const handleTimer = (seconds) => {
        if (seconds === 0) {
            const current = curPlayer;
            setCurPlayer(oppPlayer);
            setOppPlayer(current);
            setTimerKey((prev) => prev + 1);
        }
    };
    return (
        <div className="navbar">
            <div className="timer">
                <Timer key={timerKey} timeout={10} onTimer={handleTimer} />s
            </div>
            <div className="main-info">
                <div className="players">
                    {curPlayer === "A" && (
                        <div className="seta-player">
                            <img src={TOKEN_PATH + "setaPlayer.svg"} />
                        </div>
                    )}
                    <div className={`${curPlayer === "A" ? "fst-player" : ""}`}>
                        <h4>{nickA}</h4>
                    </div>
                    <div>
                        <img
                            src={TOKEN_PATH + playersTokens[0] + "T" + ".svg"}
                            width="50px"
                            style={{ marginLeft: "10px" }}
                        />
                    </div>
                </div>

                <p id="versus">v.s.</p>

                <div className="players">
                    <div>
                        <img
                            src={TOKEN_PATH + playersTokens[1] + "T" + ".svg"}
                            width="50px"
                            style={{ marginRight: "10px" }}
                        />
                    </div>
                    <div className={`${curPlayer === "B" ? "scd-player" : ""}`}>
                        <h4>{nickB}</h4>
                    </div>
                    {curPlayer === "B" && (
                        <div className="seta-scd-player">
                            <img src={TOKEN_PATH + "setaPlayer.svg"} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default ControlPanel;
