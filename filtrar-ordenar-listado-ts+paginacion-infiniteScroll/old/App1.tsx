import { useEffect, useMemo, useRef, useState } from "react"
import { SortBy, type User } from "./types.d"
import './App.css'
import { UsersList } from "./components/UsersList"


const fetchUsers = async (page: number) => {
  return await fetch(`https://randomuser.me/api?results=10&seed=sergi&page=${page}`)
    .then(async res => {
      if (!res.ok) throw new Error("Error en la petición")
      return await res.json()
    })
    .then(res => res.results)

}


function App() {
  const [users, setUsers] = useState<User[]>([])
  const [mostrarColores, setMostrarColores] = useState(false)
  const [sorTing, setSorTing] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const originalsUsers = useRef<User[]>([])

  const toggleColores = () => {
    setMostrarColores(!mostrarColores)
  }

  const toggleSortByCountry = () => {
    const newSortingValue = sorTing === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
    setSorTing(newSortingValue)
  }
  const handleReset = () => {
    setUsers(originalsUsers.current)
  }

  const handleDelete = (uuid: string) => {
    const filteredUsers = users.filter((user) => user.login.uuid !== uuid)
    setUsers(filteredUsers)
  }

  const handleChangeSort = (sort: SortBy) => {
    setSorTing(sort)
  }

  useEffect(() => {
    setLoading(true)
    setError(false)
    /* 
    fetch(`https://randomuser.me/api?results=10&seed=sergi&page=${currentPage}`)
      .then(async res => {
        if (!res.ok) throw new Error("Error en la petición")
        return await res.json()
      })
      .then(res => { // resuelve promesa
        setUsers(prevUsers => {
          const newUsers = prevUsers.concat(res.results)
          originalsUsers.current = newUsers
          return newUsers
        })

      })
      .catch(err => { // errores
        setError(err)
        console.error(err)
      })
      .finally(() => { // siempre
        setLoading(false)
      }) 
      */
     fetchUsers(currentPage)
     .then(users => { // resuelve promesa
      setUsers(prevUsers => {
        const newUsers = prevUsers.concat(users)
        originalsUsers.current = newUsers
        return newUsers
      })

    })
    .catch(err => { // errores
      setError(err)
      console.error(err)
    })
    .finally(() => { // siempre
      setLoading(false)
    }) 

  }, [currentPage])

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
        {loading && <strong>Cargando...</strong>}
        {error && <p>Ha habido un error</p>}
        {!error && users.length === 0 && <p>No hay usuarios</p>}


        {!loading && !error && <button onClick={() => setCurrentPage(currentPage + 1)}>Cargar más resultados</button>}


      </main>

    </>
  )
}

export default App
