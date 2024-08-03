import { Badge, Button, Card, TextInput, Title } from "@tremor/react"
import { useState } from "react"
import { useUserActions } from "../hooks/useUserActions"

export function CreateNewUser() {
    const { addUser } = useUserActions()
    const [result, setResult] = useState<"ok" | "ko" | null>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setResult(null)

        const form = e.target as HTMLFormElement
        const formData = new FormData(form)

        const name = formData.get("name") as string
        const email = formData.get("email") as string
        const github = formData.get("github") as string

        if (!name || !email || !github) {
            return setResult("ko")
        }

        addUser({ name, email, github })
        setResult("ok")

        //resetear formulario
        form.reset()
    }
    return (
        <Card style={{ marginTop: "18px" }}>
            <Title>Crear nuevo usuario</Title>

            <form onSubmit={handleSubmit}>
                <TextInput
                    name="name"
                    placeholder="Aquí el nombre"
                />
                <TextInput
                    name="email"
                    placeholder="Aquí el email"
                />
                <TextInput
                    name="github"
                    placeholder="Aquí el usuario de github"
                />
                <div>
                    <Button
                        type="submit"
                        style={{ marginTop: "18px" }}
                    >
                        Crear usuario
                    </Button>
                    <span>
                        {result === "ok" && (
                            <Badge color='green'>Guardado correctamente</Badge>
                        )}
                        {result === "ko" && <Badge color='red'>Error con los campos</Badge>}
                    </span>
                </div>
            </form>
        </Card>
    )
}