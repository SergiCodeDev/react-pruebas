import { LENGUAJES_SOPORTADOS } from "../constants"

export const LanguageSelector = ({ onChange }) => {
    return (
        <select name="lenguajes">
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