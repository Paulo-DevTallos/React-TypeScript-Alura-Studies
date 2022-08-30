import { useEffect, useState } from "react"
import Button from "../Button"
import Watch from "./Watch"
import { TimeToSeconds } from "../../common/utils/date"
import { ITarefas } from "../../Types/ITarefas"

import style from './Chronometer.module.scss'

interface Props {
  selected: ITarefas | undefined
  finishTask: () => void
}

const Chronometer = ({selected, finishTask}: Props) => {
  const [time, setTime] = useState<number>()

  useEffect(() => {
    if(selected?.tempo) {
      setTime(TimeToSeconds(selected.tempo))
    }
  }, [selected])

  const handleDecrement = (counter: number = 0) => {
    setTimeout(() => {
      if(counter > 0) {
        setTime(counter - 1)
        return handleDecrement(counter - 1)
      }

      finishTask()
    }, 1000);
  }
  
  return(
    <div className={style.cronometro}>
      <p className={style.titulo}>
        Escolha um Card e inicie o cronômetro
      </p>
      <div className={style.relogioWrapper}>
        <Watch timeStamp={time}/>
      </div>
      <Button
        onClick={() => handleDecrement(time)} 
        name="Começar"
      />
    </div>
  )
}

export default Chronometer