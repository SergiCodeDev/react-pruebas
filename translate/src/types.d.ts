import { AUTO_LENGUAJE, LENGUAJES_SOPORTADOS } from "./constants"

export type Lenguaje = keyof typeof LENGUAJES_SOPORTADOS
export type AutoLenguaje = typeof AUTO_LENGUAJE
export type DesdeLenguaje = Lenguaje | AutoLenguaje

export interface State {
    fromLanguage: string,
    toLanguage: string,
    fromText: string,
    result: string,
    loading: boolean
}

export type Action =
    | { type: "INTERCAMBIAR_LENGUAJES" }
    | { type: "DESDE_LENGUAJE", payload: string }
    | { type: "DESTINO_LENGUAJE", payload: string }
    | { type: "DESDE_TEXTO", payload: string }
    | { type: "DESTINO_RESULTADO", payload: string }