import { Card, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material"
import SyntaxHighlighter from 'react-syntax-highlighter'
import { useQuestionsStore } from "./store/questions"
import { type Question as QuestionType } from "./types.d"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"

const Question = ({info}: {info: QuestionType}) => {
    return (
        <Card variant="outlined" sx={{p:2, textAlign: "left"}}>
            <Typography variant="h5">
                {info.question}
            </Typography>
            <SyntaxHighlighter language="javascript" style={oneDark} >
                {info.code}
            </SyntaxHighlighter>
            <List disablePadding>
                {info.answers.map((answer, index) => (
                    <ListItem key={index} disablePadding divider>
                        <ListItemButton>
                            <ListItemText primary={answer} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Card>
    )
}

export const Game = () => {
    const questions = useQuestionsStore(state => state.questions)
    const currentQuestions = useQuestionsStore(state => state.currentQuestion)
    
    const questionInfo = questions[currentQuestions]
    return (
        <>
        <Question info={questionInfo}/>
        </>
    )
}