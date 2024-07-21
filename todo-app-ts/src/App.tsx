import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoId, type Todo as TodoType } from './types'

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

  const handleRemove = ({ id }: TodoId) => {
    const newTodos = todos.filter(todo => todo.id != id)
    setTodos(newTodos)
  }

  // ({ id, completado } : { id: TodoId, completado: TodoCompletado })
  const handleCompleted = ({ id, completado }: Pick<TodoType, "id" | "completado">) => {
    const newTodos = todos.map(todo =>{
      if (todo.id == id) {
        return {
          ...todo,
          completado
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  return (
    <div className="flex justify-center mt-20 mb-20 px-12 py-8 bg-neutral-100 w-5/12 mx-auto rounded-2xl shadow-2xl shadow-neutral-100/50">
      <Todos
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={todos}
      />
    </div>
  )
}
