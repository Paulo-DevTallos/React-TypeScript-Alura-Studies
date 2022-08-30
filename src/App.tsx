import { useState } from "react";
import Form from "./component/Form";
import List from "./component/List";

import style from './App.module.scss';
import Chronometer from "./component/Chonometer";
import { ITarefas } from "./Types/ITarefas";

const App = () => {
//App gerencia os componentes
  const [tarefas, setTarefas] = useState<ITarefas[] | []>([])
  const [selected, setSelected] = useState<ITarefas>()

  const handleTaskSelected = (tarefaSelecionada: ITarefas) => {
    setSelected(tarefaSelecionada)
    setTarefas(oldTasks => oldTasks.map(tarefas => ({
      ...tarefas,
      selected: tarefas.id === tarefaSelecionada.id ? true : false
    })))
  }


  const finishTask = () => {
    if(selected) {
      setSelected(undefined)
      setTarefas(oldTasks => oldTasks.map(tarefa => {
        if(tarefa.id === selected.id) {
          return {
            ...tarefa,
            selected: false,
            completed: true,
          }
        }

        return tarefa
      }))
    }
  }


  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List 
        tarefas={tarefas}
        selectTask={handleTaskSelected}  
      />
      <Chronometer
        selected={selected}
        finishTask={finishTask}
      />
    </div>
  );
}

export default App;
