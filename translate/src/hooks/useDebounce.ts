import { useEffect, useState } from 'react'

export function useDebounce<T> (value: T, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    // limpiar time
    return () => { clearTimeout(timer) }
  }, [value, delay])

  return debouncedValue
}
