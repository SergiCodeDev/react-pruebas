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
                className="bg-transparent placeholder:text-neutral-300 font-semibold placeholder:opacity-100 outline-none text-center border-b-2 border-neutral-200 w-60 transition-colors ease-in-out duration-300 focus:border-neutral-300 p-1 focus:border-neutral-500/60 focus:text-neutral-500/80 text-neutral-300"
                value={inputValue}
                onChange={ e => {setInputValue(e.target.value)}}
                placeholder="¿Qué quieres hacer?"
                autoFocus
            />
        </form>
        
    )
}