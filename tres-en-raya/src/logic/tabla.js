import { WINNER_COMBOS } from "../constants.js"

export const mirarGanador = (tableroParaMirar) => {
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (tableroParaMirar[a] &&
            tableroParaMirar[a] === tableroParaMirar[b] &&
            tableroParaMirar[a] === tableroParaMirar[c]) {
            return tableroParaMirar[a]
        }
    }
    return null
}

export const mirarJuegoAcabado = (nuevoTablero) => {
    return nuevoTablero.every((square) => square !== null)
}