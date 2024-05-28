import { useState } from 'react'

import { Square } from './components/Square.jsx'
import { TURNOS } from './constants.js'
import { mirarGanador, mirarJuegoAcabado } from './logic/tabla.js'
import { GanadorModal } from './components/GanadorModal.jsx'
import { eliminarPartidaDelStorage, guardarJuegoEnStorage } from './logic/storage/storage.js'

import './App.css'


function App() {
  const [tablero, setTablero] = useState(() => {
    const tablaDesdeLocalStorage = window.localStorage.getItem("tabla")
    return tablaDesdeLocalStorage ? JSON.parse(tablaDesdeLocalStorage) : Array(9).fill(null)
  })
  const [turno, setTurno] = useState(()=>{
    const tundoDesdeLocalStorage = window.localStorage.getItem("turno")
    return tundoDesdeLocalStorage ?? TURNOS.X
  })
  const [ganador, setGanador] = useState(null)



  const reiniciarJuego = () => {
    setTablero(Array(9).fill(null))
    setTurno(TURNOS.X)
    setGanador(null)

    eliminarPartidaDelStorage()
  }

  const updateBoard = (index) => {
    if (tablero[index] || ganador) return

    const nuevoTablero = [...tablero] //para una copia profunda usar -> structuredClone(tablero)
    nuevoTablero[index] = turno
    setTablero(nuevoTablero)

    const nuevoTurno = turno === TURNOS.X ? TURNOS.O : TURNOS.X
    setTurno(nuevoTurno)
    //local storage (localdb) guardar partida

    // guardarJuegoEnStorage(nuevoTablero,nuevoTurno)
    guardarJuegoEnStorage({
      tabla: nuevoTablero,
      turno: nuevoTurno
    })

    const nuevoGanador = mirarGanador(nuevoTablero)
    if (nuevoGanador) {
      setGanador(nuevoGanador) //async
      //console.log(ganador) //-> null
      /*
      // no usar asi
      setGanador((prevGanador)=>{
        console.log(`Ganador: ${nuevoGanador}, el anterior ${prevGanador}`)
        return nuevoGanador
      }) 
      */
    } else if (mirarJuegoAcabado(nuevoTablero)){
      setGanador(false)
    }
  }

  return (
    <main className='board'>
      <h1>Tres en Raya</h1>
      <button onClick={reiniciarJuego}>Reiniciar Juego</button>
      <section className='game'>
        {
          tablero.map((/* _, */square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {/* tablero[index] */
                square
                }
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turno === TURNOS.X}>{TURNOS.X}</Square>
        <Square isSelected={turno === TURNOS.O}>{TURNOS.O}</Square>
      </section>

      <GanadorModal ganador={ganador} reiniciarJuego={reiniciarJuego}/>

    </main>
  )
}

export default App
