import { useCatImage } from '../hooks/useCatImage.js'

export function Otro() {
    const { imagenUrl } = useCatImage({ fact: 'cat' })

    return (
        <>
            {imagenUrl && <img src={imagenUrl}></img>}
        </>
    )
}