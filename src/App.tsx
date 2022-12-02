import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/UI/accordion/Accordion";
import {quiz} from "./models/quiz.model";
import Header from "./components/UI/accordion/Header";
import {Col, Container, Row} from "react-bootstrap";

function App() {
    const [quiz, setQuizes] = useState<quiz[]>([{
        id: "1",
        title: "quiz 1",
        createdAt: (new Date).toString(),
        createdBy: "admin",
        published: false
    }])



  return (
    <div className="App">
        <Header/>
        <button type="button" className="btn btn-primary">Создать новую викторину</button>
        <Container className="mt-5">
            <Row>
                <Col>
                    <Accordion quizes={ quiz }/>
                </Col>
            </Row>
        </Container>

    </div>
  );
}

export default App;
