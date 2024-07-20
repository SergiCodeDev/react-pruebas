import { useState } from 'react'
import { Todos } from './components/Todos'

const ejemploTodo = [
  {
    id: "1",
    titulo: "Ejemplo React + Typescript",
    completado: true
  },
  {
    id: "2",
    titulo: "Ejemplo Vite Create",
    completado: false
  },
  {
    id: "3",
    titulo: "Ejemplo Tipado Dev",
    completado: true
  }
]

export default function App() {
  const [todos, setTodos] = useState(ejemploTodo)
  return (
    <div className="flex justify-center mt-20 mb-20 px-12 py-8 bg-neutral-100 w-5/12 mx-auto rounded-2xl shadow-2xl shadow-neutral-100/50">
      <Todos todos={todos} />
    </div>
  )
}
