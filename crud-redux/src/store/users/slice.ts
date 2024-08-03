import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
    {
        id: "1",
        name: "Verde",
        email: "verde@gmail.com",
        github: "verde",
    },
    {
        id: "2",
        name: "Uno",
        email: "uno@gmail.com",
        github: "uno",
    },
    {
        id: "3",
        name: "Prueba",
        email: "prueba@gmail.com",
        github: "prueba",
    },
];

export type UserId = string

export interface User {
    name: string
    email: string
    github: string
}
export interface UserWithId extends User {
    id: UserId
}

/* 
let initialState: UserWithId[] = DEFAULT_STATE
const persistedState = localStorage.getItem("__redux__state__")
if (persistedState) {
    initialState = JSON.parse(persistedState).users
} 
*/


const initialState: UserWithId[] = (() => {
    const persistedState = localStorage.getItem("__redux__state__")
    if (persistedState) {
        return JSON.parse(persistedState).users
    }
    return DEFAULT_STATE
})()
// (fnAnonima)(ejecuata)
// (() => {})()


export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addNewUser: (state, action: PayloadAction<User>) => {
            const id = crypto.randomUUID()
            // return [...state, {id, ...action.payload}]
            state.push({ id, ...action.payload })
        },
        // deleteUserById: (state, action: {type: string, payload: UserId}) =>{
        deleteUserById: (state, action: PayloadAction<UserId>) => {
            const id = action.payload
            return state.filter(user => user.id !== id)
        },
        rollbackUser: (state, action: PayloadAction<UserWithId>) => {
			const isUserAlreadyDefined = state.some(user => user.id === action.payload.id)
			if (!isUserAlreadyDefined) {
                // return [... state, action.payload]
                // de esta manera no esta devolviendo ni generando un nuevo estado
				state.push(action.payload)
			}
		}
    }
})

export default usersSlice.reducer

export const {addNewUser, deleteUserById, rollbackUser } = usersSlice.actions