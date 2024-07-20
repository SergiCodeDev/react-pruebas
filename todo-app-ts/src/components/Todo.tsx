import { type Todo as TodoType } from "../types"

type Props = TodoType

export const Todo: React.FC<Props> = ({ id, titulo, completado }) => {
    return (
        <div className="flex flex-row flex-nowrap justify-between">
            <div className="flex flex-row flex-nowrap items-center">
                <input
                    className="toggle"
                    checked={completado}
                    type="checkbox"
                    onChange={() => { }}
                />
                <label className={`${completado ? "line-through text-neutral-500" : ""} ml-2`}>{titulo}</label>
            </div>

            <button className="px-1 py-1 bg-neutral-200/70 rounded-md"
                onClick={() => { }}
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