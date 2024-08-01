import { ArrowsIcon } from "./components/Icons";
import { LanguageSelector } from "./components/LanguageSelector";
import { AUTO_LENGUAJE } from "./constants";
import { useStore } from "./hooks/useStore";

function App() {
  const { fromLanguage, toLanguage, setDesdeLenguaje, intercambiarLenguajes } = useStore()
  return (
    <div className="contenedor">
      <h1>Translate</h1>
      <div className="cotenedor-grid">

        <div>
          <LanguageSelector />
          <h2>Desde</h2>
          {fromLanguage}
        </div>

        <div>
          <button
            disabled={fromLanguage === AUTO_LENGUAJE}
            onClick={intercambiarLenguajes}
          >
            <ArrowsIcon />
          </button>
        </div>

        <div>
          <LanguageSelector />
          <h2>Destino</h2>
          {toLanguage}
        </div>

      </div>
    </div>
  )
}

export default App
