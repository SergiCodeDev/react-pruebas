export default function Texto({mensaje, estilos: {color = "black", tamaño, grosor = 400, mayusculas}, ...props }) {

    const estilos = {
        color: color,
        fontSize: tamaño,
        fontWeight: grosor,
        ...(mayusculas && { textTransform: 'uppercase' })
    };

    

    return (
        <>
        <p style={estilos} {...props} >{mensaje}</p>
        </>
    );

}