import { useReducer } from "react";
import { Action, type State } from "./types.d";

// 1. Crear estado inicial
const initialState: State = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  result: "",
  loading: false
}

// 2. Crear reducer
function reducer (state: State, action: Action) {
  const { type } = action

  if (type === "INTERCAMBIAR_LENGUAJES") {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage
    }
  }

  if (type === "DESDE_LENGUAJE") {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if (type === "DESTINO_LENGUAJE") {
    return {
      ...state,
      fromLanguage: action.payload
    }
  }

  if (type === "DESDE_TEXTO") {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: ""
    }
  }

  if (type === "DESTINO_RESULTADO") {
    return {
      ...state,
      loading: false,
      result: action.payload
    }
  }

  return state
}

function App() {
  // 3. Usar estado useReducer
  // const [state, dispatch] = useReducer(reducer, initialState)
  const [{
    fromLanguage,
    toLanguage,
    fromText,
    result,
    loading
  }, dispatch] = useReducer(reducer, initialState)
  return (
   <div>
    <h1>Translate</h1>
    <button
      onClick={()=> {
        dispatch({type: "DESDE_LENGUAJE", payload: "es"})
      }}
    >Cambiar</button>
   </div>
  )
}

export default App