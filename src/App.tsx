import { useState } from "react";
import { Form } from "./component/Form";
import List from "./component/List";

import style from './App.module.scss'
import Chronometer from "./component/Chonometer";
import { ITarefas } from "./Types/ITarefas";

const App = () => {
//App gerencia os componentes

  const [tarefas, setTarefas] = useState<ITarefas[] | []>([])

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List tarefas={tarefas}/>
      <Chronometer />
    </div>
  );
}

export default App;
