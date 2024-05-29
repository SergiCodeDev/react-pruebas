import { useEffect, useState } from "react"
const SeguirRaton = () => {
  const [activado, setActivado] = useState(false)
  const [posicion, setPosicion] = useState({ x: 0, y: 0 })

  // movimientoRaton
  useEffect(() => {
    console.log("Efecto", { activado })

    const movimientoRaton = (e) => {
      const { clientX, clientY } = e
      console.log("handleMove", { clientX, clientY })
      setPosicion({ x: clientX, y: clientY })
    }
    // getEventListeners(window) // consola navegador saber eventos activos // solo chromium?
    if (activado) {
      window.addEventListener("pointermove", movimientoRaton)
    }

    // se ejecuta cuando cambia "activado" (cuando vuelve a renderizar o actualizar...)
    // cuando el componente se desmonta
    // cuando las dependecias cambian, antes de ejecutar el efecto nuevo
    return () => { // metodo de limpieza
      window.removeEventListener("pointermove", movimientoRaton)
    }
  }, [activado])

  // cambiar clase del body
  useEffect(()=> {
    document.body.classList.toggle("no-cursor", activado)

    return () => {
      document.body.classList.remove("no-cursor")
    }

  }, [activado])

  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] o [activado, otro, ejemplo] -> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renderiza el componente

  return (
    <>
      <div style={{
        position: "absolute",
        backgroundColor: "orange",
        borderRadius: "50%",
        opacity: 0.8,
        pointerEvents: "none",
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${posicion.x}px, ${posicion.y}px)`
      }} />
      <h1>Proyecto 3</h1>
      <button onClick={() => setActivado(!activado)}>
        {activado ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </>
  )
}
function App() {
  const [mounted, setMounted] = useState(true)
  return (
    <main>
      {mounted && <SeguirRaton />}
      <button onClick={() => setMounted(!mounted)}>Toggle mounted FollowMouse component</button>
    </main>
  )
}

export default App
