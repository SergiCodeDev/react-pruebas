import { createContext } from "react";

// 1. Crear Contexto
export const FiltrosContext = createContext()

// 2. Crear Provider, para proveer el contexto
export function FiltrosProvider({ children }) {
    return (
        <FiltrosContext.Provider value={{
            category: "all",
            minPrice: 0
        }}>
            {children}
        </FiltrosContext.Provider>
    )
}