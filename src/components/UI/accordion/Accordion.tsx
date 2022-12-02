import React from 'react';
import QuizItem from "./QuizItem";
import {quiz} from "../../../models/quiz.model";

interface AccordionProps {
    quizes: quiz[]
}
const Accordion: React.FC<AccordionProps> = ({quizes}) => {
    const renderQuizes = () => {
        return quizes.map(quiz => {
            return <QuizItem key={quiz.id} quiz={ quiz }/>
        })
    }

    return (
        <>
            <h2>Список викторин</h2>
            <div>{ renderQuizes() }</div>

        </>
    );
};

export default Accordion;