import React from 'react';

import style from './Button.module.scss'

export class Button extends React.Component<
    { 
      name: string, 
      type?: "button" | "submit" | "reset" | undefined 
    }
  > {
  render() { 
    const  { type = "button" } = this.props // se o tipo do botao nao for especifdicado ele atribui o tipo padrao: button
    return (
      <button className={style.botao} type={type}>
        { this.props.name }
      </button>
    )
  }
}