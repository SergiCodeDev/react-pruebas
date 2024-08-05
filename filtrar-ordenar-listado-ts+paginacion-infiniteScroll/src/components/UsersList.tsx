import { SortBy, type User } from "../types.d"

interface Props {
    changeSorting: (sort: SortBy) => void
    deleteUser: (uuid: string) => void
    mostrarColores: boolean,
    users: User[]
}

export function UsersList ({changeSorting, deleteUser, mostrarColores, users}: Props) {
    return (
        <table style={{width: "100%"}}>
            <thead>
                <tr>
                    <td>Foto</td>
                    <td style={{cursor: "pointer"}} onClick={()=>changeSorting(SortBy.NAME)}>Nombre</td>
                    <td style={{cursor: "pointer"}} onClick={()=>changeSorting(SortBy.LAST)}>Apellido</td>
                    <td style={{cursor: "pointer"}} onClick={()=>changeSorting(SortBy.COUNTRY)}>País</td>
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => {
                        const backgroundColor = index % 2 === 0 ? "#333" : "#555"
                        const color = mostrarColores ? backgroundColor: "transparent"
                       return (
                            <tr key={user.login.uuid} style={{ backgroundColor: color }}>
                                <th>
                                    <img src={user.picture.thumbnail} alt="" />
                                </th>
                                <th>
                                    {user.name.first}
                                </th>
                                <th>
                                    {user.name.last}
                                </th>
                                <th>
                                    {user.location.country}
                                </th>
                                <th>
                                    <button
                                    onClick={()=> {
                                        deleteUser(user.login.uuid)
                                    }}
                                    >Borrar</button>
                                </th>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        )

}