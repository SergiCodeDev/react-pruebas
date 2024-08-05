import { useMemo, useState } from "react"
import { SortBy, type User } from "./types.d"
import './App.css'
import { UsersList } from "./components/UsersList"
import { useUsers } from "./hooks/useUsers"
import { Results } from "./components/Results"

function App() {
  const { isLoading, isError, users, refetch, fetchNextPage, hasNextPage } = useUsers()

  const [mostrarColores, setMostrarColores] = useState(false)
  const [sorTing, setSorTing] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  const toggleColores = () => {
    setMostrarColores(!mostrarColores)
  }

  const toggleSortByCountry = () => {
    const newSortingValue = sorTing === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorTing(newSortingValue)
  }
  const handleReset = async () => {
    //setUsers(originalsUsers.current)
    await refetch()
  }

  const handleDelete = (uuid: string) => {
    const filteredUsers = users.filter((user) => user.login.uuid !== uuid)
    //setUsers(filteredUsers)
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorTing(sort)
  }

  const filteredUsers = useMemo(() => {
    return typeof filterCountry === "string" && filterCountry.length > 0
      ? users.filter((user => {
        return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
      }))
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    console.log('calculate sortedUsers')

    if (sorTing === SortBy.NONE) return filteredUsers

    const compareProperties: Record<string, (user: User) => any> = {
      [SortBy.COUNTRY]: user => user.location.country,
      [SortBy.NAME]: user => user.name.first,
      [SortBy.LAST]: user => user.name.last
    }

    return filteredUsers.toSorted((a, b) => {
      const extractProperty = compareProperties[sorTing]
      return extractProperty(a).localeCompare(extractProperty(b))
    })
  }, [filteredUsers, sorTing])

  return (
    <>
      <h1>Listado de Personas</h1>
      <Results />
      <header>
        <button
          onClick={toggleColores}
        >
          Colorear filas
        </button>
        <button
          onClick={toggleSortByCountry}
        >
          {sorTing === SortBy.COUNTRY ? "No ordenar por país" : "Ordenar por país"}
        </button>
        <button
          onClick={handleReset}
        >
          Resetear estado
        </button>
        <input type="text" placeholder="Filtrar por país" onChange={(e) => {
          setFilterCountry(e.target.value)
        }} />
      </header>
      <main>
        {users.length > 0 &&
          <UsersList
            changeSorting={handleChangeSort}
            deleteUser={handleDelete}
            mostrarColores={mostrarColores}
            users={sortedUsers}
          />}
        {isLoading && <strong>Cargando...</strong>}
        {isError && <p>Ha habido un error</p>}
        {!isLoading && !isError && users.length === 0 && <p>No hay usuarios</p>}

        {!isLoading && !isError && hasNextPage == true && <button onClick={() => {fetchNextPage()}}>Cargar más resultados</button>}
        {!isLoading && !isError && hasNextPage == false && <p>No hay más resultados</p>}

      </main>

    </>
  )
}

export default App
