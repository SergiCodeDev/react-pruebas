import { TodoTitulo } from "../types"
import { CreateTodo } from "./CreateTodo"

interface Props {
    onAddTodo: ({titulo}: TodoTitulo) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
    return(
        <header className="flex flex-col items-center w-full gap-4">
            <h1 className="text-5xl font-extrabold text-neutral-600">App de Notas</h1>
            <CreateTodo saveTodo={onAddTodo} />
        </header>
    )
}