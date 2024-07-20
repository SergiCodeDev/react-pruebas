/* type Todos = {
    id: string
    titulo: string
    completado: boolean
} */

interface Todos {
    id: string
    titulo: string
    completado: boolean
}

type ListOfTodos = Todos[]

interface Props {
    todos: ListOfTodos
}

//export const Todos = ({ todos }: { todos: Array<{ id: string, titulo: string, completado: boolean }>
//export const Todos = ({ todos }: { todos: { id: string, titulo: string, completado: boolean }[] })

export const Todos: React.FC<Props> = ({ todos }) => {
    return (
        <ul>
            {
                todos.map(todos => (
                    <li key={todos.id}>
                        {todos.titulo}
                    </li>
                ))
            }
        </ul>
    )
}