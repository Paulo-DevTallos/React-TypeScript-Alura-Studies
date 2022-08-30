import Item from './Item'
import style from './List.module.scss'
import { ITarefas } from '../../Types/ITarefas'

interface Props {
  tarefas: ITarefas[],
  selectTask: (tarefaSelecionada: ITarefas) => void  
}

const List = ({ tarefas, selectTask }:Props) => {

  return(
    <aside className={style.listaTarefas}> 
      <h2>Estudos do dia</h2>
      <ul>
        {
          tarefas.map((item) => (
            <Item 
              selectTask={selectTask}
              key={item.id}
              /* conseguimos utilizar tudo oq está no objeto item porém é necessário ter atenção*/
              { ...item } 
            />
          ))
        }
      </ul>
    </aside>    
  )
}

export default List