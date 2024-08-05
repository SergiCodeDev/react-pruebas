export const fetchUsers = async ({ pageParam = 1 }: { pageParam?: number }) => {
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