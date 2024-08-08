
import { Container, Stack, Typography } from '@mui/material'
import './App.css'
import { JavaScriptLogo } from './icons/JavaScriptLogo'
import { Start } from './Start'
import { useQuestionsStore } from './store/questions'
import { Game } from './Game'
import { useQuestionsData } from './hooks/useQuestionsData'
import { Results } from './Results'

function App() {
  const questions = useQuestionsStore(state => state.questions)
  const { noRespondido } = useQuestionsData()
  return (  
    <main>
      <Container maxWidth="sm">
        <Stack direction="row" gap={2} alignItems="center" justifyContent="center">
          <JavaScriptLogo />
          <Typography variant='h2' component="h1">
            JavaScript Quizz
          </Typography>
        </Stack>
        {questions.length === 0 && <Start />}
        {questions.length > 0 && noRespondido > 0 && <Game />}
        {questions.length > 0 && noRespondido === 0 && <Results />}
      </Container>
    </main>
  )
}

export default App
