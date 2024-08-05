import { useMemo, useState } from "react"
import { SortBy, type User } from "./types.d"
import './App.css'
import { UsersList } from "./components/UsersList"
import { useInfiniteQuery } from "@tanstack/react-query"


const fetchUsers = async ({ pageParam = 1 }: { pageParam?: number }) => {
  return await fetch(`https://randomuser.me/api?results=10&seed=sergi&page=${pageParam}`)
    .then(async res => {
      if (!res.ok) throw new Error("Error en la petición")
      return await res.json()
    })
    .then(res => {
      // const nextCursor = Number(res.info.page) + 1 // infinita paginacion
      const currentPage = Number(res.info.page)
      const nextCursor = currentPage > 10 ? undefined: + 1
      return {
        users: res.results,
        nextCursor
      }
    })

}


function App() {
  const { isLoading, isError, data, refetch, fetchNextPage, hasNextPage } = useInfiniteQuery<{ nextCursor?: number, users: User[] }>(
    {
      queryKey: ["users"],
      queryFn: ({ pageParam = 1 }) => fetchUsers({ pageParam: pageParam as number }),
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      initialPageParam: 1,
    }
  )

  // pages.flatMap [{users: [1,2,3]}, {users: [4,5,6]}] se unen los 2 arrays de users => [1,2,3,4,5,6] 
  const users: User[] = data?.pages?.flatMap(page => page.users) ?? []

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
