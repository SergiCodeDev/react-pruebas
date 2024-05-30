import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts.js'

export function useCatFact() {
    const [fact, setFact] = useState()

    const refreshFact = () => {
        getRandomFact().then(setFact)
        // getRandomFact().then(newFact =>setFact(newFact)) //lo mismo que arriba
    }

    // recuperar frase al cargar la página
    useEffect(refreshFact, [])

    return { fact, refreshFact }
}