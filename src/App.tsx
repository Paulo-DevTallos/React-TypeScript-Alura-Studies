import { useState } from "react";
import { Form } from "./component/Form";
import List from "./component/List";

import style from './App.module.scss'
import Chronometer from "./component/Chonometer";

const App = () => {

  const [tarefas, setTarefa] = useState([{
    id: 0,
    tarefa: "tarefa padrao",
    tempo: "01:02:03"
  }])

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefa}/>
      <List tarefas={tarefas}/>
      <Chronometer />
    </div>
  );
}

export default App;
