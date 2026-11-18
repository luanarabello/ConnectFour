import shuffleArray from "../helpers/shuffle";

export const TOKEN_PATH = "/assets/images/";
export const TOKENCOLOR = ["cian", "green", "orange", "pink", "red", "yellow"];
export const playersTokens = shuffleArray(TOKENCOLOR).slice(0, 2);

export const size = 80;
