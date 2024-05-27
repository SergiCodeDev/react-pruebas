import { useState } from 'react'
import TwFollowCard from './components/TwFollowCard.jsx'
import "./App.css"

function App() {
  //ejemplo ...
  const sergiCodeDev = {
    nombreUsiario: "facebook",
    nombre: "React.js",
    // loSigue: false
  }

  const [name, setName] = useState("Sergi")

  return (
    <>
      <section className='app card-tw'>
        <TwFollowCard
          //ejemplo ...
          {...sergiCodeDev}
        />

        <TwFollowCard
          nombreUsiario="SergiCodeDev"
          nombre={name}
          // loSigue
        />

        <TwFollowCard
          nombreUsiario="vercel"
          nombre="Next.js"
          // loSigue
        />

        <TwFollowCard
          nombreUsiario="vitejs"
          nombre="Vite"
          // loSigue={false}
        />

        <button className='btn-section-tw-cn' onClick={() => { setName("NoCode") }}>Cambiar Nombre</button>
      </section>



    </>
  )
}

export default App
