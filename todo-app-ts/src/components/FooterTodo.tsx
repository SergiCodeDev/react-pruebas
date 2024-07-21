import { Filters } from "./Filters"

export const FooterTodo: React.FC<Props> = ({
    activeCount,
    todos,
    onClearComplete
}) => {
    return(
        <footer className="">
            <span className="">
                <strong>{todos.length}</strong> tareas pendientes
            </span>

            <Filters
                filterSelected={}
                onFilterChange={()=>{}}
            />
        </footer>
    )
}