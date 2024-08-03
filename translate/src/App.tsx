import { useEffect } from "react";
import { ArrowsIcon, ClipboardIcon, SpeakerIcon } from "./components/Icons";
import { LanguageSelector } from "./components/LanguageSelector";
import { TextArea } from "./components/TextArea";
import { AUTO_LENGUAJE, VOICE_FOR_LANGUAGE } from "./constants";
import { useStore } from "./hooks/useStore";
import { DesdeLenguaje, SectionType } from "./types.d";
import { translate } from "./services/translate";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const { loading,
    fromLanguage,
    toLanguage,
    setDesdeLenguaje,
    setDestinoLenguaje,
    intercambiarLenguajes,
    fromText,
    result,
    setDesdeTexto,
    setDestinoResultado
  } = useStore()
  const debouncedFromText = useDebounce(fromText, 400)

  useEffect(() => {
    if (debouncedFromText === "") return
    translate({ fromLanguage, toLanguage, text: debouncedFromText })
      .then((result) => {
        if (result == null) return
        setDestinoResultado(result)
      })
      .catch(() => setDestinoResultado("Error"))

  }, [fromText, fromLanguage, toLanguage])

  // copiar
  const handleClipboard = () => {
    navigator.clipboard.writeText(result).catch(() => { })
  }

  // que te hable por voz, api navegadores
  const handleSpeack = ({lang, texto} : {lang: DesdeLenguaje, texto: string}) => {
    const utterance = new SpeechSynthesisUtterance(texto)
    utterance.lang = VOICE_FOR_LANGUAGE[lang as keyof typeof VOICE_FOR_LANGUAGE]
    utterance.rate = 0.9
    speechSynthesis.speak(utterance)
  }

  return (
    <div className="contenedor">
      <h1>Translate</h1>
      <div className="cotenedor-grid">

        <div>
          <LanguageSelector
            // type="from"
            type={SectionType.From}
            value={fromLanguage}
            onChange={setDesdeLenguaje}
          />
          <h2>Desde</h2>
          <TextArea
            type={SectionType.From}
            value={fromText}
            onChange={setDesdeTexto}
          />
          <button
            onClick={() =>handleSpeack({lang: fromLanguage, texto: fromText})}
          >
            <SpeakerIcon />
          </button>
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
          <LanguageSelector
            // type="to"
            type={SectionType.To}
            value={toLanguage}
            onChange={setDestinoLenguaje}
          />
          <h2>Destino</h2>
          <TextArea
            type={SectionType.To}
            value={result}
            onChange={setDestinoResultado}
            loading={loading}
          />
          <button
            onClick={handleClipboard}
          >
            <ClipboardIcon />
          </button>
          <button
            onClick={() =>handleSpeack({lang: toLanguage, texto: result})}
          >
            <SpeakerIcon />
          </button>
        </div>

      </div>
    </div>
  )
}

export default App
