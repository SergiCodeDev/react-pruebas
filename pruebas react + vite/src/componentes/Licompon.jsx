export default function Licompon({ texto, ocultar }) {

    if (ocultar) {
        return null
    } else {
        return <li style={{color: "black"}}>{texto}</li>
    }
}