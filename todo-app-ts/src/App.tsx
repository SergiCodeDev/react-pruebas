import { useState } from 'react'
import { Todos } from './components/Todos'

const ejemploTodo = [
  {
    id: "1",
    titulo: "ejemplo 1",
    completado: true
  },
  {
    id: "2",
    titulo: "ejemplo 2",
    completado: false
  },
  {
    id: "3",
    titulo: "ejemplo 3",
    completado: true
  }
]

export default function App() {
  const [todos, setTodos] = useState(ejemploTodo)
  return (
    <>
      <Todos todos={todos} />
    </>
  )
}
