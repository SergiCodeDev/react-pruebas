import { TodoId, type Todo as TodoType } from "../types"

// type Props = TodoType

interface Props extends TodoType {
    // onRemoveTodo: (id: string) => void
    onRemoveTodo: ({id}: TodoId) => void
    onToggleCompleteTodo: ({ id, completado }: Pick<TodoType, "id" | "completado">) => void
}

export const Todo: React.FC<Props> = ({ id, titulo, completado, onRemoveTodo, onToggleCompleteTodo }) => {
    const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        onToggleCompleteTodo({
            id, completado: e.target.checked
        })
        
    }

    return (
        <div className="flex flex-row flex-nowrap justify-between">
            <div className="flex flex-row flex-nowrap items-center">
                <input
                    className="w-4 h-4 transition-all duration-300 ease-in-out appearance-none shadow-[0_0_6px] shadow-red-400/40 bg-red-400 cursor-pointer rounded-full checked:shadow-green-400/40 checked:bg-green-400"
                    checked={completado}
                    type="checkbox"
                    onChange={handleChangeCheckbox}
                />
                <label className={`text-neutral-600 ${completado ? "line-through text-neutral-500/80" : ""} ml-3`}>{titulo}</label>
            </div>

            <button className="px-1 py-1 bg-neutral-200/70 rounded-md"
                onClick={() => {onRemoveTodo({id})}}
            >
                <svg xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 6l-12 12" />
                    <path d="M6 6l12 12" />
                </svg>
            </button>
        </div>
    )

}