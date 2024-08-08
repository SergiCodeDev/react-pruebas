import { Button } from "@mui/material"
import { useQuestionsData } from "./hooks/useQuestionsData"
import { useQuestionsStore } from "./store/questions"

export const Footer = () => {
    const {bien, mal, noRespondido} =useQuestionsData()
    const reset = useQuestionsStore(state => state.reset)
    return(
        <footer style={{ marginTop: '16px' }}>
        <strong>{`✅ ${bien} correctas - ❌ ${mal} incorrectas - ❓ ${noRespondido} sin responder`}</strong>
        <div style={{ marginTop: '16px' }}>
          <Button onClick={() => reset()}>
            Resetear juego
          </Button>
        </div>
      </footer>
    )
}