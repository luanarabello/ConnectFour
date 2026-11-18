import React, { useState } from "react";
import { playersTokens } from "../constants";
import { TOKEN_PATH } from "../constants";

const Arrow = ({ player, onClick }) => {
    const columns = [0, 1, 2, 3, 4, 5, 6];
    return (
        <div className="slot-arrows">
            {player && (
                <React.Fragment>
                    {columns.map((col) => {
                        return (
                            <div
                                key={col}
                                className="arrow"
                                onClick={() => {
                                    if (onClick) onClick(col);
                                }}
                            >
                                <img
                                    src={
                                        player === "A"
                                            ? TOKEN_PATH +
                                              playersTokens[0] +
                                              "A" +
                                              ".svg"
                                            : TOKEN_PATH +
                                              playersTokens[1] +
                                              "A" +
                                              ".svg"
                                    }
                                />
                            </div>
                        );
                    })}
                </React.Fragment>
            )}
        </div>
    );
};

export default Arrow;
