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

  // sacarlos desde api -> base datos
  const users = [
    {
      nombreUsiario: "vercel",
      nombre: "Next.js",
      initialLoSigue: false
    },
    {
      nombreUsiario: "vitejs",
      nombre: "Vite",
      initialLoSigue: true
    }
  ]

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

        { // mostrando desde json... 
          users.map(user => {
            const { nombreUsiario, nombre, initialLoSigue } = user
            return (
              < TwFollowCard
                key={nombreUsiario} //mejor usar id db
                nombreUsiario={nombreUsiario}
                nombre={nombre}
                initialLoSigue={initialLoSigue}
              />
            )

          })
        }

        { // mas corto
          /* users.map(({ nombreUsiario, nombre, initialLoSigue }) => {
            return (
              < TwFollowCard
                key={nombreUsiario} //id
                nombreUsiario={nombreUsiario}
                nombre={nombre}
                initialLoSigue={initialLoSigue}
              />
            )
          }) */
        }

        <button className='btn-section-tw-cn' onClick={() => { setName("NoCode") }}>Cambiar Nombre</button>
      </section>

    </>
  )
}

export default App
