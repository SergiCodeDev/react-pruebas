/* type Todos = {
    id: string
    titulo: string
    completado: boolean
} */

/* interface Todos {
    id: string
    titulo: string
    completado: boolean
}

type ListOfTodos = Todos[] */

import { type ListOfTodos } from "../types"
import { Todo } from "./Todo"

interface Props {
    todos: ListOfTodos
}

//export const Todos = ({ todos }: { todos: Array<{ id: string, titulo: string, completado: boolean }>
//export const Todos = ({ todos }: { todos: { id: string, titulo: string, completado: boolean }[] })

export const Todos: React.FC<Props> = ({ todos }) => {
    return (
        <ul className="w-4/5">
            {
                todos.map(todo => (
                    <li key={todo.id} 
                    className={`first:pt-0 pt-2 last:pb-0 pb-2 border-b-2 border-solid border-neutral-200 last:border-none`}
                    >
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            titulo={todo.titulo}
                            completado={todo.completado}
                        />
                    </li>
                ))
            }
        </ul>
    )
}