import { useQuestionsStore } from "../store/questions"

export const useQuestionsData = () => {
    // esto haces que solo observe (state => state.questions) 
    // y evita renderizados inecesarios porque es mas especifico
    const questions = useQuestionsStore(state => state.questions)
    
    let bien = 0
    let mal = 0
    let noRespondido = 0

    questions. forEach(question => {
        const { userSelectedAnswer, correctAnswer} = question
        if(userSelectedAnswer == null) noRespondido++
        else if (userSelectedAnswer === correctAnswer) bien++
        else mal++

    })

    return {bien, mal, noRespondido}
}