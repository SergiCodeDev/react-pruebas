import { useEffect, useMemo, useRef, useState } from "react"
import { SortBy, type User } from "./types.d"
import './App.css'
import { UsersList } from "./components/UsersList"

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [mostrarColores, setMostrarColores] = useState(false)
  // const [sortByCountry, setSortByCountry] = useState(false)
  const [sorTing, setSorTing] = useState<SortBy>(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState<string | null>(null)

  const originalsUsers = useRef<User[]>([])

  const toggleColores = () => {
    setMostrarColores(!mostrarColores)
  }
  /*  
  const toggleSortByCountry = () => {
    // Asegura trabajar con el valor más reciente del estado.
    setSortByCountry(prevState => !prevState)
  }
  */

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
    fetch('https://randomuser.me/api?results=100')
      .then(async res => await res.json())
      .then(res => {
        setUsers(res.results)
        originalsUsers.current = res.results
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  /*
  const filteredUsers = typeof filterCountry === "string" && filterCountry.length > 0
  ? users.filter((user => {
    return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
  }))
  : users 
  */

  /* 
  const sortedUsers = sortByCountry
  // users.sort((a, b) => { mal por editar directamente el array
  // [...users].sort((a, b) => { 7 copia minima
  // structuredClone(users).sort((a, b) => { 5.5 demasiado profunda
  // users.toSorted((a, b) => { // 9.9
  ? filteredUsers.toSorted((a, b) => {
    // comparar strings segun idioma/acentos...
    return a.location.country.localeCompare(b.location.country)
  })
  : filteredUsers 
  */

  const filteredUsers = useMemo(() => {
    return typeof filterCountry === "string" && filterCountry.length > 0
      ? users.filter((user => {
        return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
      }))
      : users
  }, [users, filterCountry])

  /*  
  const sortedUsers = useMemo(() => {
    return sorTing === SortBy.COUNTRY
      ? filteredUsers.toSorted((a, b) => {
        return a.location.country.localeCompare(b.location.country)
      })
      : filteredUsers
  }, [filteredUsers, sorTing]) 
  */

  const sortedUsers = useMemo(() => {
    console.log('calculate sortedUsers')

    if (sorTing === SortBy.NONE) return filteredUsers
    // funcional 
    /* 
    if(sorTing === SortBy.COUNTRY) {
      return filteredUsers.toSorted(
        (a,b) => a.location.country.localeCompare(b.location.country)
      )
    }
    if(sorTing === SortBy.NAME) {
      return filteredUsers.toSorted(
        (a,b) => a.name.first.localeCompare(b.name.first)
      )
    }
    if(sorTing === SortBy.LAST) {
      return filteredUsers.toSorted(
        (a,b) => a.name.last.localeCompare(b.name.last)
      )
    } 
    */
    // reutilizable
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
        <UsersList changeSorting={handleChangeSort} deleteUser={handleDelete} mostrarColores={mostrarColores} users={sortedUsers} />
      </main>

    </>
  )
}

export default App
