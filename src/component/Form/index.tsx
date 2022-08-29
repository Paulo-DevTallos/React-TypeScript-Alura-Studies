import React from 'react';
import { ITarefas } from '../../Types/ITarefas';
import { Button } from '../Button';

import style from './Form.module.scss'

export class Form extends React.Component<{ setTarefas: ITarefas[] }> {
  state = {
    tarefa: '',
    tempo: '00:00',
  }

  // nesse caso nao é possivel acessar o que está fora do escopo da funcao, por isso utilizamos o bind(this) em sua chamada
  handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    this.props.setTarefas(tarefasAnt => [...tarefasAnt, {this.state}])
      //    this.props.setTarefas(tarefas => console.log(tarefas))
  }

  render(): React.ReactNode {
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
            onChange={(e) => e.target.value}
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
}