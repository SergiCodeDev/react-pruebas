import { useState } from "react"
import { TodoTitulo } from "../types"

interface Props {
    saveTodo: ({ titulo }: TodoTitulo) => void
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
    const [inputValue, setInputValue] = useState("")
    const handleSudmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        saveTodo({titulo: inputValue})
        setInputValue("")
    }
    return (
        <form onSubmit={handleSudmit}>
            <input
                className=""
                value={inputValue}
                onChange={ e => {setInputValue(e.target.value)}}
                placeholder="¿Qué quieres hacer?"
                autoFocus
            />
        </form>
    )
}