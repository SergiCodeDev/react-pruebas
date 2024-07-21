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
        <footer className="">
            <span className="">
                <strong>{activeCount}</strong> tareas pendientes
            </span>

            <Filters
                filterSelected={filterSelected}
                onFilterChange={handleFilterChange}
            />
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