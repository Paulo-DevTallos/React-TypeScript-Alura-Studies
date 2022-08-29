import Item from './Item'
import style from './List.module.scss'

const List = () => {
  const listRender = [
    {
      id: 0,
      tarefa: "JavaScript",
      tempo: "02:10:00",  
    },
    {
      id: 1,
      tarefa: "React typeScript",
      tempo: "01:15:20"
    },
    {
      id: 1,
      tarefa: "Todo List",
      tempo: "01:05:20"
    }
  ]
  
  return(
    <aside className={style.listaTarefas}> 
      <h2>Estudos do dia</h2>
      <ul>
        {
          listRender.map((item, id) => (
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