import { useState } from 'react'
import './App.css'
import Texto from './componentes/Texto.jsx'
import Card from './componentes/Card.jsx'
import Licompon from './componentes/Licompon.jsx'


function App() {
  const [miLi, setMiLi] = useState(false)

  const constocultarLiClick = () => {
    setMiLi(!miLi); // Cambiar al valor opuesto del estado actual
  };

  return (
    <>
      <Texto
        mensaje="Pruebas"
        estilos={{
          color: "blue",
          tamaño: "2.4rem",
          grosor: 800,
          mayusculas: true,

        }}
      />

      <Card>
        <Texto
          mensaje="Envuelto"
          estilos={{
            color: "blue",
            tamaño: "1.4rem"
          }}

        />
      </Card>

      <Card
        colorBorde="pink"
      >
        <Texto
          mensaje="Envuelto"
          estilos={{
            color: "pink",
            tamaño: "1.4rem"
          }}
        />
      </Card>
      
      <ul>
      <Licompon 
        texto="Ejercicio 1"
        ocultar={miLi}
      />
      <Licompon 
        texto="Ejercicio 2"
        ocultar={miLi}
      />
      <Licompon 
        texto="Ejercicio 3"
        ocultar={miLi}
      />
      <Licompon 
        texto="Ejercicio 4"
        ocultar={miLi}
      />
      <Licompon 
        texto="Ejercicio 5"
        ocultar={miLi}
      />
      </ul>

      <button style={{backgroundColor: "orange"}} onClick={constocultarLiClick}>{miLi ? 'Mostrar lista' : 'Quitar lista'}</button>
      

    </>
  )
}

export default App
