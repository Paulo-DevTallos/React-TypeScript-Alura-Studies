import { Button } from "../Button"
import Watch from "./Watch"

import style from './Chronometer.module.scss'

const Chronometer = () => {
  return(
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um Card e inicie o cronômetro</p>
      <div className={style.relogioWrapper}>
        <Watch />
      </div>
      <Button 
        name="Começar"
      />
    </div>
  )
}

export default Chronometer