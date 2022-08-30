import style from './Button.module.scss'

interface Props {
  name: string, 
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void
}

const Button = ({ onClick, type, name }: Props) => {
  return(
    <button 
      onClick={onClick} 
      className={style.botao} 
      type={type}>
      {name}
    </button>
  )
}

export default Button