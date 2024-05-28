import { Square } from "./Square.jsx"

export function GanadorModal({ ganador, reiniciarJuego }) {
    if (ganador === null) return null

    const textoGanador = ganador === false ? "Empate" : "Gano " + ganador

    return (
        <section className="winner">
            <div className='text'>
                <h2>{textoGanador}</h2>
                <header className='win'>
                    {ganador && <Square>{ganador}</Square>}
                </header>
                <footer>
                    <button onClick={reiniciarJuego}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    )
}