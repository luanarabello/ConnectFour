import React from "react";
import { TOKENCOLOR } from "../constants";
import { TOKEN_PATH } from "../constants";
import { playersTokens } from "../constants";

const Slot = ({ player, row, isSpecial }) => {
    const finalPosition = row * 80 + row * 10 + 9;
    return (
        <div className={`slot ${isSpecial ? "special-slot" : ""}`}>
            <img
                style={{
                    position: "absolute",
                    top: player ? finalPosition : 0,
                    opacity: player ? 1 : 0,
                    transition: "top ease-in-out 500ms",
                    zIndex: -10,
                }}
                src={
                    player === "A"
                        ? TOKEN_PATH + playersTokens[0] + "T" + ".svg"
                        : TOKEN_PATH + playersTokens[1] + "T" + ".svg"
                }
                width="82px"
                height="82px"
            />
        </div>
    );
};
export default Slot;
