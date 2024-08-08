import { Card, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from "@mui/material"
import SyntaxHighlighter from 'react-syntax-highlighter'
import { useQuestionsStore } from "./store/questions"
import { type Question as QuestionType } from "./types.d"
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Footer } from "./Footer"

const getBgColor = (info: QuestionType, index: number) => {
    const { userSelectedAnswer, correctAnswer } = info
    if (userSelectedAnswer == null) return "transparent"
    if (index !== correctAnswer && index !== userSelectedAnswer) return "transparent"
    if (index === correctAnswer) return "green"
    if (index === userSelectedAnswer) return "red"

    return "transparent"
}

const Question = ({ info }: { info: QuestionType }) => {
    const selectAnswer = useQuestionsStore(state => state.selectAnswer)

    const createHandleClick = (answerIndex: number) => () => {
        selectAnswer(info.id, answerIndex)
    }

    /*     
    const getBgColor = (index: number) => {
        const {userSelectedAnswer, correctAnswer} = info
    
        return "transparent"
    } 
    */
    return (
        <Card variant="outlined" sx={{ p: 2, textAlign: "left" }}>
            <Typography variant="h5">
                {info.question}
            </Typography>
            <SyntaxHighlighter language="javascript" style={oneDark} >
                {info.code}
            </SyntaxHighlighter>
            <List disablePadding>
                {info.answers.map((answer, index) => (
                    <ListItem key={index} disablePadding divider>
                        <ListItemButton
                            disabled={info.userSelectedAnswer != null}
                            onClick={createHandleClick(index)}
                            sx={{
                                // backgroundColor: getBgColor(index)
                                backgroundColor: getBgColor(info, index)
                            }}
                        >
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
    const currentQuestion = useQuestionsStore(state => state.currentQuestion)
    const goNextQuestion = useQuestionsStore(state => state.goNextQuestion)
    const goPreviousQuestion = useQuestionsStore(state => state.goPreviousQuestion)

    const questionInfo = questions[currentQuestion]
    return (
        <>
            <Stack direction="row" gap={2} alignItems="center" justifyContent="center">
                <IconButton onClick={goPreviousQuestion} disabled={currentQuestion === 0}>
                    <ArrowBackIosNew />
                </IconButton>
                {currentQuestion + 1} / {questions.length}
                <IconButton onClick={goNextQuestion} disabled={currentQuestion >= questions.length - 1}>
                    <ArrowForwardIos />
                </IconButton>
            </Stack>
            <Question info={questionInfo} />
            <Footer />
        </>
    )
}