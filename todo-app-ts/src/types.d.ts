import{ type TODO_FILTERS } from "./consts"

export interface Todo {
    id: string
    titulo: string
    completado: boolean
}

export type TodoId = Pick<Todo, "id">
export type TodoTitulo = Pick<Todo, "titulo">
export type TodoCompletado = Pick<Todo, "completado">

export type ListOfTodos = Todo[]

export type FilterValue = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]