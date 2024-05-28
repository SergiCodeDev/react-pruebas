/* export function guardarJuegoEnStorage({nuevoTablero, nuevoTurno}) {
    window.localStorage.setItem("tabla", JSON.stringify(nuevoTablero))
    window.localStorage.setItem("turno", nuevoTurno)
} */

export const guardarJuegoEnStorage = ({tabla, turno}) => {
    window.localStorage.setItem("tabla", JSON.stringify(tabla))
    window.localStorage.setItem("turno", turno)
}

export const eliminarPartidaDelStorage = () => {
    window.localStorage.removeItem("tabla")
    window.localStorage.removeItem("turno")
}