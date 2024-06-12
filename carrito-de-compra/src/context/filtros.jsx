import { createContext, useState } from "react";

// 1. Crear Contexto
// Este es el que tenemos que consumir
export const FiltrosContext = createContext()

// 2. Crear Provider, para proveer el contexto
// Este es el que nos provee de acceso al contexto
export function FiltrosProvider({ children }) {
    const [filtros, setFiltros] = useState({
        category: "all",
        minPrice: 0
    })

    /*  
    <FiltrosContext.Provider value={{
         category: "all",
         minPrice: 0
     }}>
         {children}
     </FiltrosContext.Provider>  
     */

    return (
        < FiltrosContext.Provider value={{
            filtros,
            setFiltros
        }
        }>
            {children}
        </FiltrosContext.Provider >

    )
}