import React from 'react';
import './App.css';
import Accordion from "./components/UI/accordion/Accordion";

function App() {



  return (
    <div className="App">
        <button type="button" className="btn btn-primary">Создать новую викторину</button>
      <h1>Список квизов</h1>
        <Accordion/>

    </div>
  );
}

export default App;
