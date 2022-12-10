import React from 'react';
import {Quiz} from "../../../models/quiz.model";
import QuizItem from "../admin/quiz/QuizItem";
import {Button} from "@mui/material";

interface AccordionProps {
    quizes: Quiz[]
}
const Accordion: React.FC<AccordionProps> = ({quizes}) => {
    const renderQuizes = () => {
        return quizes.map(quiz => {
            // return <QuizItem key={quiz.id} quiz={ quiz }/>
        })
    }



    return (
        <>
            <h2>Список викторин</h2>
            <Button variant="contained">Создать новую викторину</Button>

        </>
    );
};

export default Accordion;