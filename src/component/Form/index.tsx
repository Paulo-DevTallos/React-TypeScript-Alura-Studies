import React, { useState } from 'react';
import { ITarefas } from '../../Types/ITarefas';
import Button from '../Button';
import { v4 as uuidv4 } from 'uuid';

import style from './Form.module.scss'

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>>
}

const Form = ({ setTarefas }: Props) => {

  const [tarefa, setTarefa] = useState('')
  const [tempo, setTempo] = useState("00:00:00")

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTarefas(oldTasks => 
      [
        ...oldTasks, 
        {
          tarefa,
          tempo,
          selected: false,
          completed: false,
          id: uuidv4()
        }
      ]
    )
    setTarefa('')
    setTempo("00:00:00")
  }


  return(
    <form className={style.novaTarefa} onSubmit={handleAddTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">
          Adicione um novo estudo
        </label>
        <input 
          type="text" 
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value )}
          placeholder="O que você quer estudar"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">
          Tempo
        </label>
        <input 
          type="time" 
          step={1}
          name="tempo"
          value={tempo} //inserindo valor padrão do timer
          onChange={(e) => setTempo(e.target.value)} //setState pega os novos valores que estão no input
          id="tempo"
          min="00:00"
          max="01:30"
          required          
        />
      </div>
      <Button
        name='Adicionar'
        type="submit"
      />
    </form>    
  )
}


export default Form
/*export class Form extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefas[]>> 
}> {
  state = {
    tarefa: '',
    tempo: '00:00',
  }

  // nesse caso nao é possivel acessar o que está fora do escopo da funcao, por isso utilizamos o bind(this) em sua chamada
  handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    this.props.setTarefas(oldTasks => 
      [
        ...oldTasks, 
        {
          ...this.state,
          selected: false,
          completed: false,
          id: uuidv4()
        }
      ]
    )
    this.setState({
      tarefa: '',
      tempo: "00:00:00"
    })
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.handleAddTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input 
            type="text" 
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={(e) => this.setState({ ...this.state, tarefa: e.target.value })}
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input 
            type="time" 
            step={1}
            name="tempo"
            value={this.state.tempo} //inserindo valor padrão do timer
            onChange={(e) => this.setState({...this.state, tempo: e.target.value})} //setState pega os novos valores que estão no input
            id="tempo"
            min="00:00"
            max="01:30"
            required          
          />
        </div>
        <Button
          name='Adicionar'
          type="submit"
        />
      </form>       
    )
  }
}*/