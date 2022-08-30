import Item from './Item'
import style from './List.module.scss'
import { ITarefas } from '../../Types/ITarefas'

const List = ({ tarefas }: { tarefas: ITarefas[] }) => {

  return(
    <aside className={style.listaTarefas}> 
      <h2>Estudos do dia</h2>
      <ul>
        {
          tarefas.map((item, id) => (
            <Item 
              key={id}
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