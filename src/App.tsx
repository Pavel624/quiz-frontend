import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/UI/accordion/Accordion";
import {Quiz} from "./models/quiz.model";
import Header from "./components/UI/accordion/Header";
import {CollapsibleTableContainer} from "./components/UI/admin/quiz/CollapsibleTableContainer";
import {Button, styled} from "@mui/material";
import ModalCreateQuiz from "./components/UI/admin/quiz/ModalCreateQuiz";
import {Save} from "@mui/icons-material";

function App() {
    const [quiz, setQuizes] = useState<Quiz[]>([{
        id: "1",
        title: "quiz 1",
        description: "desc1",
        createdAt: (new Date).toString(),
        createdBy: "admin",
        published: false
    }])

    const BlueButton = styled(Button)({
        backgroundColor: "ghostwhite",
        margin: 2,
        "&:hovered": {
            backgroundColor: "lawngreen"
        },
        "&:disabled": {
            backgroundColor: "gray"
        }
    });



  return (
    <div className="App">
        <Header/>
        {/*<Container className="mt-5">*/}
        {/*    <Row>*/}
        {/*        <Col>*/}
        {/*            <Accordion quizes={ quiz }/>*/}
        {/*        </Col>*/}
        {/*    </Row>*/}
        {/*</Container>*/}
        <ModalCreateQuiz/>
        <CollapsibleTableContainer quzies={[]}/>
        <BlueButton startIcon={<Save/>} variant="outlined" color="secondary">Сохранить все</BlueButton>

    </div>
  );
}

export default App;
