export const TODO_FILTERS = {
    TODOS: "todos",
    ACTIVOS: "activos",
    COMPLETADOS: "completados"
} as const

export const FILTERS_BUTTONS = {
    [TODO_FILTERS.TODOS]: {
        literal: "Todos",
        href: `/?filter=${TODO_FILTERS.TODOS}`
    },
    [TODO_FILTERS.ACTIVOS]: {
        literal: "Activos",
        href: `/?filter=${TODO_FILTERS.ACTIVOS}`
    },
    [TODO_FILTERS.COMPLETADOS]: {
        literal: "Completados",
        href: `/?filter=${TODO_FILTERS.COMPLETADOS}`
    }

} as const