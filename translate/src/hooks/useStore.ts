import { useReducer } from "react"
import { Action, DesdeLenguaje, Lenguaje, State } from "../types"
import { AUTO_LENGUAJE } from "../constants"

// 1. Crear estado inicial
const initialState: State = {
    fromLanguage: "auto",
    toLanguage: "en",
    fromText: "",
    result: "",
    loading: false
}

// 2. Crear reducer
function reducer(state: State, action: Action) {
    const { type } = action

    if (type === "INTERCAMBIAR_LENGUAJES") {
        if(state.fromLanguage === AUTO_LENGUAJE) return state

        return {
            ...state,
            fromLanguage: state.toLanguage,
            toLanguage: state.fromLanguage
        }
    }

    if (type === "DESDE_LENGUAJE") {
        return {
            ...state,
            fromLanguage: action.payload
        }
    }

    if (type === "DESTINO_LENGUAJE") {
        return {
            ...state,
            fromLanguage: action.payload
        }
    }

    if (type === "DESDE_TEXTO") {
        return {
            ...state,
            loading: true,
            fromText: action.payload,
            result: ""
        }
    }

    if (type === "DESTINO_RESULTADO") {
        return {
            ...state,
            loading: false,
            result: action.payload
        }
    }

    return state
}

export function useStore() {
    // 3. Usar estado useReducer
    // const [state, dispatch] = useReducer(reducer, initialState)
    const [{
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading
    }, dispatch] = useReducer(reducer, initialState)

    const intercambiarLenguajes = () => {
        dispatch({type:"INTERCAMBIAR_LENGUAJES"})
    }

    const setDesdeLenguaje = (payload: DesdeLenguaje) => {
        dispatch({type:"DESDE_LENGUAJE", payload})
    }

    const setDestinoLenguaje = (payload: Lenguaje) => {
        dispatch({type:"DESTINO_LENGUAJE", payload})
    }

    const setDesdeTexto = (payload: string) => {
        dispatch({type:"DESDE_TEXTO", payload})
    }

    const setDestinoResultado = (payload: string) => {
        dispatch({type:"DESTINO_RESULTADO", payload})
    }

    return {
        fromLanguage,
        toLanguage,
        fromText,
        result,
        loading,
        intercambiarLenguajes,
        setDesdeLenguaje,
        setDestinoLenguaje,
        setDesdeTexto,
        setDestinoResultado,
    }
}
