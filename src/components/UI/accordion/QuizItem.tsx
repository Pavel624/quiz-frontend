import React from 'react';
import {quiz} from "../../../models/quiz.model";
import {Accordion, Button, Table} from "react-bootstrap";
import {tab} from "@testing-library/user-event/dist/tab";

export interface QuizItemProps {
    quiz: quiz
}

const QuizItem : React.FC<QuizItemProps> = ({quiz}) => {
    return (
        <div className="mb-3">
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th className="accordion-collapse">Номер</th>
                    <th>Название</th>
                    <th>Описание</th>
                    <th>Опубликовано?</th>
                    <th>Количество раундов</th>
                    <th>Количество вопросов</th>
                </tr>
                </thead>
                <tbody>

                <tr data-toggle="collapse" data-target="#accordion" className="clickable">
                    <td>1</td>
                    <td>Викторина</td>
                    <td>Просто описание</td>
                    <td>Нет</td>
                    <td>3</td>
                    <td>20</td>
                </tr>

                <Accordion>
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                    <Table>
                                <thead>
                                <tr>
                                    <th className="accordion-collapse">Номер</th>
                                    <th>Название</th>
                                    <th>Описание</th>
                                    <th>Опубликовано?</th>
                                    <th>Количество раундов</th>
                                    <th>Количество вопросов</th>
                                </tr>
                                </thead>
                                <tbody>

                                <tr data-toggle="collapse" data-target="#accordion" className="clickable">
                                    <td>1</td>
                                    <td>Викторина</td>
                                    <td>Просто описание</td>
                                    <td>Нет</td>
                                    <td>3</td>
                                    <td>20</td>
                                </tr>
                                </tbody>
                    </Table>
                        </Accordion.Body>

                </Accordion>
                </tbody>


            </Table>


        </div>
    );
};

export default QuizItem;