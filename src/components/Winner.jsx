const Winner = ({ nickA, nickB, setHasStarted, winner }) => {
    if (winner) {
        return (
            <div className="container">
                <div className="winner-box">
                    <h2>
                        {winner === "E"
                            ? "Empate..."
                            : winner === "A"
                            ? `${nickA} Ganhou!`
                            : `${nickB} Ganhou!`}
                    </h2>
                    <button
                        className="play-again"
                        onClick={() => {
                            setHasStarted(false);
                        }}
                    >
                        Jogar Novamente
                    </button>
                </div>
            </div>
        );
    }
    return null;
};
export default Winner;
