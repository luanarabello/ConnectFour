import React from "react";
import Slot from "./Slot";
import { useState, useEffect } from "react";
import ControlPanel from "./ControlPanel";
import Winner from "./Winner";
import Arrow from "./Arrow";
import shuffleArray from "../helpers/shuffle";

const Board = ({ gameType, setHasStarted, nickA, nickB }) => {
    const [curPlayer, setCurPlayer] = useState("A");
    const [oppPlayer, setOppPlayer] = useState("B");
    const [gameOver, setGameOver] = useState(false);
    const [winner, setWinner] = useState(null);
    const [timerKey, setTimerKey] = useState(0);
    const [specialSlots, setSpecialSlots] = useState([]);

    const [board, setBoard] = useState([
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
        ["", "", "", "", "", "", ""],
    ]);

    useEffect(() => {
        const allCoords = [
            "0,0",
            "0,1",
            "0,2",
            "0,3",
            "0,4",
            "0,5",
            "0,6",
            "1,0",
            "1,1",
            "1,2",
            "1,3",
            "1,4",
            "1,5",
            "1,6",
            "2,0",
            "2,1",
            "2,2",
            "2,3",
            "2,4",
            "2,5",
            "2,6",
            "3,0",
            "3,1",
            "3,2",
            "3,3",
            "3,4",
            "3,5",
            "3,6",
            "4,0",
            "4,1",
            "4,2",
            "4,3",
            "4,4",
            "4,5",
            "4,6",
            "5,0",
            "5,1",
            "5,2",
            "5,3",
            "5,4",
            "5,5",
            "5,6",
        ];

        const shuffled = shuffleArray(allCoords);
        setSpecialSlots(shuffled.slice(0, 5));
    }, []);
    console.log(specialSlots);

    const robotMove = () => {
        if (gameOver) return;

        //  todas as colunas onde pelo menos o ultimo espaço ta vazio
        const validColumns = [];
        for (let col = 0; col < 7; col++) {
            if (board[0][col] === "") {
                validColumns.push(col);
            }
        }

        if (validColumns.length === 0) return;

        const randomColumn =
            validColumns[Math.floor(Math.random() * validColumns.length)];

        setTimeout(() => handleClick(randomColumn), 800); // delay  para parecer mais "natural"
    };

    useEffect(() => {
        if (gameType === "Robô" && curPlayer === "B" && !gameOver)
            setTimeout(robotMove, 300);
    }, [curPlayer, gameType, gameOver]);

    const verificaVitoria = (row, column, player) => {
        let contSlots;

        // Vertical
        contSlots = 1;
        if (row + 1 < 6 && board[row + 1][column] === player) {
            contSlots++;
            if (row + 2 < 6 && board[row + 2][column] === player) {
                contSlots++;
                if (row + 3 < 6 && board[row + 3][column] === player) {
                    contSlots++;
                }
            }
        }

        if (row - 1 >= 0 && board[row - 1][column] === player) {
            contSlots++;
            if (row - 2 >= 0 && board[row - 2][column] === player) {
                contSlots++;
                if (row - 3 >= 0 && board[row - 3][column] === player) {
                    contSlots++;
                }
            }
        }
        if (contSlots >= 4) {
            console.log("vitória vertical");
            return player;
        }

        // Horizontal
        contSlots = 1;

        if (column + 1 < 7 && board[row][column + 1] === player) {
            contSlots++;
            if (column + 2 < 7 && board[row][column + 2] === player) {
                contSlots++;
                if (column + 3 < 7 && board[row][column + 3] === player) {
                    contSlots++;
                }
            }
        }

        if (column - 1 >= 0 && board[row][column - 1] === player) {
            contSlots++;
            if (column - 2 >= 0 && board[row][column - 2] === player) {
                contSlots++;
                if (column - 3 >= 0 && board[row][column - 3] === player) {
                    contSlots++;
                }
            }
        }

        if (contSlots >= 4) {
            console.log("vitória horizontal");
            return player;
        }

        // Diagonal principal
        contSlots = 1;

        if (
            row - 1 >= 0 &&
            column + 1 < 7 &&
            board[row - 1][column + 1] === player
        ) {
            contSlots++;
            if (
                row - 2 >= 0 &&
                column + 2 < 7 &&
                board[row - 2][column + 2] === player
            ) {
                contSlots++;
                if (
                    row - 3 >= 0 &&
                    column + 3 < 7 &&
                    board[row - 3][column + 3] === player
                ) {
                    contSlots++;
                }
            }
        }

        if (
            row + 1 < 6 &&
            column - 1 >= 0 &&
            board[row + 1][column - 1] === player
        ) {
            contSlots++;
            if (
                row + 2 < 6 &&
                column - 2 >= 0 &&
                board[row + 2][column - 2] === player
            ) {
                contSlots++;
                if (
                    row + 3 < 6 &&
                    column - 3 >= 0 &&
                    board[row + 3][column - 3] === player
                ) {
                    contSlots++;
                }
            }
        }

        if (contSlots >= 4) {
            console.log("vitória diagonal principal");
            return player;
        }

        // Diagonal secundária
        contSlots = 1;

        if (
            row + 1 < 6 &&
            column + 1 < 7 &&
            board[row + 1][column + 1] === player
        ) {
            contSlots++;
            if (
                row + 2 < 6 &&
                column + 2 < 7 &&
                board[row + 2][column + 2] === player
            ) {
                contSlots++;
                if (
                    row + 3 < 6 &&
                    column + 3 < 7 &&
                    board[row + 3][column + 3] === player
                ) {
                    contSlots++;
                }
            }
        }

        if (
            row - 1 >= 0 &&
            column - 1 >= 0 &&
            board[row - 1][column - 1] === player
        ) {
            contSlots++;
            if (
                row - 2 >= 0 &&
                column - 2 >= 0 &&
                board[row - 2][column - 2] === player
            ) {
                contSlots++;
                if (
                    row - 3 >= 0 &&
                    column - 3 >= 0 &&
                    board[row - 3][column - 3] === player
                ) {
                    contSlots++;
                }
            }
        }

        if (contSlots >= 4) {
            console.log("vitória diagonal secundária");
            return player;
        }
        let contA = 0;
        let contB = 0;
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 7; j++) {
                if (board[i][j] === "A") {
                    contA++;
                }
                if (board[i][j] === "B") {
                    contB++;
                }
            }
        }
        if (contA + contB != 41) return null;
        console.log("empate");
        return "E";
    };
    const especial = (row, column) => {
        const coord = `${row},${column}`;
        return specialSlots.includes(coord) ? true : false;
    };
    const updateBoard = (row, column, player) => {
        let especialslot = null;
        setBoard((boardAnt) => {
            const boardCopy = [...boardAnt];
            boardCopy[row][column] = player;
            return boardCopy;
        });

        const vit = verificaVitoria(row, column, player);
        if (vit === null) {
            especialslot = especial(row, column);
        }
        setWinner(vit);
        return [vit, especialslot];
    };

    const handleClick = (indexC) => {
        setTimerKey((prev) => prev + 1);
        let row = board.findIndex((rowArray, index) => {
            return rowArray[indexC] !== "" || index === board.length - 1;
        });

        if (row !== board.length - 1 && row > 0) row--;
        console.log(board);

        if (board[row][indexC] !== "" && row > 0) row--;
        console.log(row);

        if (board[row][indexC] !== "") return;

        const [vencedor, isSpecial] = updateBoard(row, indexC, curPlayer);

        if (vencedor === "A" || vencedor === "B" || vencedor === "E") {
            setGameOver(true);
        } else {
            if (isSpecial === false) {
                const curPlayerCopy = curPlayer;
                setCurPlayer(oppPlayer);
                setOppPlayer(curPlayerCopy);
                console.log("nao especial");
            } else {
                if (gameType === "Robô" && curPlayer === "B") {
                    // Robô acertou num espaço especial - joga outra vez
                    setTimeout(robotMove, 1000);
                }
            }
        }
    };

    return (
        <>
            <Winner
                winner={winner}
                oppPlayer={oppPlayer}
                setHasStarted={setHasStarted}
                nickA={nickA}
                nickB={nickB}
            />
            <ControlPanel
                gameOver={gameOver}
                curPlayer={curPlayer}
                setCurPlayer={setCurPlayer}
                setOppPlayer={setOppPlayer}
                oppPlayer={oppPlayer}
                nickA={nickA}
                nickB={nickB}
                timerKey={timerKey}
                setTimerKey={setTimerKey}
            />
            <Arrow
                player={curPlayer}
                onClick={
                    gameType === "Robô" && curPlayer === "B"
                        ? null // bloqueia cliques na vez do robô
                        : gameOver
                        ? null
                        : handleClick
                }
            />
            <div id="board">
                {board.map((row, indexR) => {
                    return row.map((player, indexC) => {
                        return (
                            <Slot
                                player={player}
                                row={indexR}
                                key={`${indexR}-${indexC}`}
                                isSpecial={specialSlots.includes(
                                    `${indexR},${indexC}`
                                )}
                            />
                        );
                        //coordenadas
                    });
                })}
            </div>
        </>
    );
};

export default Board;
