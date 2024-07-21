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
        <ul className="">
            {
                Object.entries(FILTERS_BUTTONS).map(([key, {href, literal}])=>{
                    const isSelected = key == filterSelected
                    const className = isSelected ? "slecionado" :""
                    
                    return(
                        <li key={key}>
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