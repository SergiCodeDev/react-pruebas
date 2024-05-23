export default function Card({ children, colorBorde}) {
    const estilos = {
        ...(colorBorde && { borderColor: colorBorde })
    };

    return (
      <div className="card" style={estilos}>
        {children}
      </div>
    );
  }