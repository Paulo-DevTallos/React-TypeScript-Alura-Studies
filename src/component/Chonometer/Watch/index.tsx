import style from './Watch.module.scss'

interface Props {
  timeStamp: number | undefined
}

const Watch = ({ timeStamp = 0}: Props) => {
  const minutos = Math.floor(timeStamp / 60)
  const segundos = timeStamp % 60 //modulo de javaScript

  const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0')
  const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0')

  return(
    <>
      <span className={style.relogioNumero}>{minutoDezena}</span>
      <span className={style.relogioNumero}>{minutoUnidade}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{segundoDezena}</span>
      <span className={style.relogioNumero}>{segundoUnidade}</span>
    </>
  )
}

export default Watch