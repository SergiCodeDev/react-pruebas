import { AUTO_LENGUAJE, LENGUAJES_SOPORTADOS } from "../constants"
import { DesdeLenguaje, Lenguaje, SectionType } from "../types.d"

/* interface Props {
    onChange: (lenguaje: Lenguaje) => void
} */

type Props =
// |{type: "from", value: DesdeLenguaje, onChange: (lenguaje: DesdeLenguaje) => void}
|{type: SectionType.From, value: DesdeLenguaje, onChange: (lenguaje: DesdeLenguaje) => void}
// |{type: "to", value: Lenguaje, onChange: (lenguaje: Lenguaje) => void}
|{type: SectionType.To, value: Lenguaje, onChange: (lenguaje: Lenguaje) => void}

// export const LanguageSelector = ({ onChange } : Props) => {
export const LanguageSelector: React.FC<Props> = ({ onChange, type, value }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(e.target.value as Lenguaje)
    }

    return (
        <select name="lenguajes" onChange={handleChange} value={value}>
            {/* {type === "from" && <option value={AUTO_LENGUAJE}>Detectar idioma</option>} */}
            {type === SectionType.From && <option value={AUTO_LENGUAJE}>Detectar idioma</option>}
            {
                Object.entries(LENGUAJES_SOPORTADOS).map(([key, literal]) => (
                    <option key={key} value={key}>
                        {literal}
                    </option>
                ))
            }

        </select>
    )
}