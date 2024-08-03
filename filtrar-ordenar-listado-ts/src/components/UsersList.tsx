import { type User } from "../types.d"

interface Props {
    users: User[]
}

export function UsersList ({users}: Props) {
    return (
        <table>
            <thead>
                <tr>
                    <td>Foto</td>
                    <td>Nombre</td>
                    <td>Apellido</td>
                    <td>País</td>
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => {
                       return (
                            <tr>
                                <th></th>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        )

}