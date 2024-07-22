import { type FilterValue } from "../types"
import { Filters } from "./Filters"

interface Props {
    activeCount: number
    completeCount: number
    filterSelected: FilterValue
    onClearComplete: () => void
    handleFilterChange: (filter: FilterValue) => void
}

export const FooterTodo: React.FC<Props> = ({
    activeCount = 0,
    completeCount = 0,
    filterSelected,
    handleFilterChange,
    onClearComplete
}) => {
    return(
        <footer className="flex flex-col w-full items-center">
            <div className="flex flex-row flex-nowrap gap-x-4 w-4/5 justify-between items-center">
                <span className="">
                    <strong>{activeCount}</strong> tareas pendientes
                </span>

                <Filters
                    filterSelected={filterSelected}
                    onFilterChange={handleFilterChange}
                />
            </div>
            
            {
                completeCount > 0 && (
                    <button
                    className=""
                    onClick={onClearComplete}
                    >
                        Borrar completadas
                    </button>
                )
            }
        </footer>
    )
}