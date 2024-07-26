import { FILTERS_BUTTONS } from "../consts"
import { type FilterValue } from "../types"

interface Props {
    onFilterChange: (filter: FilterValue) => void
    // filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
    filterSelected: FilterValue
}

export const Filters: React.FC<Props> = ({filterSelected, onFilterChange}) => {
    /* const handleClick = () */
    return(
        <ul className="flex flex-row gap-x-2">
            {
                Object.entries(FILTERS_BUTTONS).map(([key, {href, literal}])=>{
                    const isSelected = key == filterSelected
                    const className = isSelected ? "slecionado" :""
                    
                    return(
                        <li
                        className="py-[0.14rem] px-3 text-neutral-600 bg-neutral-200/70 transition-colors ease-in-out duration-300 hover:bg-neutral-300/70 rounded-md" 
                        key={key} 
                        >
                            <a href={href}
                            className={className}
                            onClick={
                                //handleClick(key)
                                (e)=>{
                                    e.preventDefault()
                                    onFilterChange(key as FilterValue)
                                }
                            }
                            >
                                {literal}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}