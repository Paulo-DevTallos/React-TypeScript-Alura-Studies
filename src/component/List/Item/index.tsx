import { ITarefas } from '../../../Types/ITarefas'
import style from './Item.module.scss'

interface Props extends ITarefas {
  selectTask: (tarefaSelecionada: ITarefas) => void  
}

const Item = ({tarefa, tempo, selected, completed, id, selectTask}: Props) => {
  return(
    <li 
      className={`${style.item} ${selected ? style.itemSelecionado : ''} ${completed ? style.itemCompletado : ''}`} 
      onClick={() => !completed && selectTask({
        tarefa, 
        tempo, 
        selected, 
        completed, 
        id
      })}
    > 
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completed && <span className={style.concluido} aria-label="tarefa completada"></span>}
    </li>
  )
}

export default Item 