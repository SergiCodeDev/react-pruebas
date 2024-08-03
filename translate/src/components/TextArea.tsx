import { SectionType } from '../types.d'

interface Props {
    type: SectionType
    loading?: boolean
    onChange: (value: string) => void
    value: string
}

const commonStyles = { border: 0, height: '160px', minWidth: "240px" }

const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
    if (type === SectionType.From) return 'Introducir texto'
    if (loading === true) return 'Cargando...'
    return 'Traducción'
  }

export const TextArea = ({ loading, type, value, onChange }: Props) => {
    const styles = type === SectionType.From
    ? commonStyles
    : { ...commonStyles, backgroundColor: '#f5f5f5' }

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value)
      }
    return (
        <textarea
            name=""
            id=""
            placeholder={getPlaceholder({type, loading})}
            autoFocus={type === SectionType.From}
            style={styles}
            value={value}
            onChange={handleChange}
        >
        </textarea>
    )
}