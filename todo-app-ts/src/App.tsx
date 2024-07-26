import { useState } from 'react'
import { Todos } from './components/Todos'
import { FilterValue, TodoTitulo, type TodoId, type Todo as TodoType } from './types'
import { TODO_FILTERS } from './consts'
import { FooterTodo } from './components/FooterTodo'
import { Header } from './components/Header'

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.TODOS)

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

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completado)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completado).length
  const completeCount= todos.length - activeCount

  const filteredTodos = todos.filter(todo=>{
    if (filterSelected == TODO_FILTERS.ACTIVOS) return !todo.completado
    if (filterSelected == TODO_FILTERS.COMPLETADOS) return todo.completado
    return todo
  })

  const handleAddTodo = ({titulo}: TodoTitulo): void => {
    const newTodo = {
      titulo,
      id: crypto.randomUUID(),
      completado: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className="flex flex-col items-center gap-y-12 mt-20 mb-20 px-12 py-8 bg-neutral-100 w-5/12 mx-auto rounded-2xl shadow-2xl shadow-neutral-100/50">
      <Header onAddTodo={handleAddTodo} />
      <Todos
        onToggleCompleteTodo={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
      />
      <FooterTodo 
        activeCount={activeCount}
        completeCount={completeCount}
        filterSelected={filterSelected}
        onClearComplete={handleRemoveAllCompleted}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}
